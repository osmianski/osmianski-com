<?php

namespace App\Jobs;

use App\Exceptions\NotImplemented;
use App\Models\BlogPost;
use App\Notion\Node;
use App\Object_;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SyncBlogPostsFromNotion extends Object_ implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public const BATCH_SIZE = 2;

    protected string $baseUri;
    protected string $token;
    protected string $version;
    protected string $databaseId;
    protected int $batchSize;
    protected Client $client;

    public function handle(): void
    {
        do {
            $this->fetchPages(fn($page) => $this->syncPage($page), $cursor);
        } while ($cursor);
    }

    protected function fetchPages(callable $callback, string &$cursor = null)
        : void
    {
        $json = [ 'page_size' => $this->getBatchSize() ];

        if ($cursor) {
            $json['start_cursor'] = $cursor;
        }

        $response = $this->getClient()->post(
            "{$this->getBaseUri()}/databases/{$this->getDatabaseId()}/query",
            [
                'headers' => [
                    'Authorization' => "Bearer {$this->getToken()}",
                    'Notion-Version' => $this->getVersion(),
                ],
                'json' => $json,
            ]
        );

        $json = json_decode($response->getBody()->getContents(),
            flags: JSON_THROW_ON_ERROR);

        foreach ($json->results as $page) {
            $callback($page);
        }

        $cursor = $json->has_more ? $json->next_cursor : null;
    }

    protected function fetchBlocksAsArray(string $blockId): array
    {
        $blocks = [];
        do {
            $this->fetchBlocks($blockId,
                function($block) use (&$blocks) {
                    $blocks[] = $block;
                }, $cursor);
        } while ($cursor);

        return $blocks;
    }

    protected function fetchBlocks(string $blockId, callable $callback,
        string &$cursor = null): void
    {
        $query = [ 'page_size' => $this->getBatchSize() ];

        if ($cursor) {
            $query['start_cursor'] = $cursor;
        }

        $response = $this->getClient()->get(
            "{$this->getBaseUri()}/blocks/{$blockId}/children",
            [
                'headers' => [
                    'Authorization' => "Bearer {$this->getToken()}",
                    'Notion-Version' => $this->getVersion(),
                ],
                'query' => $query,
            ]
        );

        $json = json_decode($response->getBody()->getContents(),
            flags: JSON_THROW_ON_ERROR);

        foreach ($json->results as $block) {
            $callback($block);
        }

        $cursor = $json->has_more ? $json->next_cursor : null;
    }

    protected function syncPage(\stdClass $page): void
    {
        if ($post = BlogPost::whereNotionId($page->id)->first()) {
            if ($page->archived) {
                $post->delete();
            }
            else {
                $this->assign($post, $page);
                $post->save();
            }
        }
        else {
            $post = new BlogPost();
            $this->assign($post, $page);
            $post->save();
        }
    }

    public function getToken(): string
    {
        if (!isset($this->token)) {
            $this->token = env('NOTION_TOKEN');
        }

        return $this->token;
    }

    public function getVersion(): string
    {
        if (!isset($this->version)) {
            $this->version = '2022-06-28';
        }

        return $this->version;
    }

    public function getDatabaseId(): string
    {
        if (!isset($this->databaseId)) {
            $this->databaseId = env('NOTION_BLOG_POSTS');
        }

        return $this->databaseId;
    }

    public function getBaseUri(): string
    {
        if (!isset($this->baseUri)) {
            $this->baseUri = 'https://api.notion.com/v1';
        }

        return $this->baseUri;
    }

    public function getClient(): Client
    {
        if (!isset($this->client)) {
            $this->client = new Client();
        }

        return $this->client;
    }

    public function getBatchSize(): int
    {
        if (!isset($this->batchSize)) {
            $this->batchSize = static::BATCH_SIZE;
        }

        return $this->batchSize;
    }

    protected function assign(BlogPost $post, \stdClass $page): void
    {
        if (!isset($post->notion_id)) {
            $post->notion_id = $page->id;
        }

        $post->notion_created_at = $this->parseDatetime($page->created_time);
        $post->notion_updated_at = $this->parseDatetime($page->last_edited_time);
        $post->notion_title =
            $this->parse($page->properties->Title->title ?? null)
                ?->toString();
        $post->notion_body = $this->parse($this->fetchBlocksAsArray($page->id))
            ?->toMarkdown();
    }

    protected function parse($value): ?Node
    {
        if ($value === null) {
            return null;
        }

        if (is_array($value)) {
            return empty($value) ? null : new Node\Array_([
                'items' => array_map(fn($item) => $this->parse($item), $value),
            ]);
        }

        if ($value instanceof \stdClass) {
            return $this->{'parse' . ucfirst($value->type)}($value);
        }

        throw new NotImplemented();
    }

    protected function parseText(\stdClass $value): Node\Text {
        return new Node\Text([
            'content' => $value->text->content,
        ]);
    }

    protected function parseParagraph(\stdClass $value): ?Node\Paragraph {
        return empty($value->paragraph->rich_text)
            ? null
            : new Node\Paragraph([
                'items' => array_map(fn($item) => $this->parse($item),
                    $value->paragraph->rich_text),
            ]);
    }

    protected function parseDatetime($datetime): string
    {
        return Carbon::createFromFormat("Y-m-d\\TG:i:s.v\\Z", $datetime);
    }
}
