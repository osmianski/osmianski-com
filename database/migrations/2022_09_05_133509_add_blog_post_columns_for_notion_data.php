<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->string('notion_id')->unique();
            $table->timestamp('notion_created_at');
            $table->timestamp('notion_updated_at');
            $table->string('notion_title')->nullable();
            $table->json('notion_tags')->nullable();
            $table->string('notion_body_format', 20)->nullable();
            $table->text('notion_body')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            //
        });
    }
};
