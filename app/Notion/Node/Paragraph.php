<?php

namespace App\Notion\Node;

use App\Notion\Node;

class Paragraph extends Node\Array_
{
    public function toMarkdown(): string
    {
        return parent::toMarkdown() . "\n\n";
    }
}
