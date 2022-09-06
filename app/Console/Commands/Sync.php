<?php

namespace App\Console\Commands;

use App\Jobs\SyncBlogPostsFromNotion;
use Illuminate\Console\Command;

class Sync extends Command
{
    protected $signature = 'sync';
    protected $description = 'Queues a job that syncs from/to Notion';

    public function handle(): int
    {
        SyncBlogPostsFromNotion::dispatch();

        return 0; // success code
    }
}
