<?php

namespace App\Jobs;

use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SyncBlogPostsFromNotion implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct()
    {
    }

    public function handle(): void
    {
        // 1. In Settings & members -> Integrations
        //    -> Develop your own integrations, click New Integration.
        // 2. Enter the name "Sync To osmianski.com", click Submit.
        // 3. Copy the token from Secrets -> Internal Integration Token.
        $token = env('NOTION_TOKEN');

        // 1. In the Posts database, click Share, and invite
        //    the "Sync To osmianski.com" integration.
        // 2. Copy the database ID from the URL.
        $databaseId = env('NOTION_BLOG_POSTS');

        $http = new Client([
            // Notion Base URI is used with relative requests
            'base_uri' => 'https://api.notion.com',
        ]);

        $response = $http->post("/v1/databases/{$databaseId}/query", [
            'headers' => [
                'Authorization' => "Bearer {$token}",
                'Notion-Version' => '2022-06-28',
            ],
            'json' => [
                'page_size' => 2,
            ],
        ]);

        $json = json_decode($response->getBody()->getContents(),
            flags: JSON_THROW_ON_ERROR);

        dd($json);
    }
}
