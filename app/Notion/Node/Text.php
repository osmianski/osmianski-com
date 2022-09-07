<?php

namespace App\Notion\Node;

use App\Notion\Node;

class Text extends Node
{
    protected string $content;

    public function toString(): string
    {
        return $this->content;
    }

    public function toMarkdown(): string
    {
        return $this->content;
    }
}
