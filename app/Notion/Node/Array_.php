<?php

namespace App\Notion\Node;

use App\Notion\Node;

class Array_ extends Node
{
    /**
     * @var Node[]
     */
    protected array $items;

    public function toString(): string
    {
        return implode(
            array_map(fn(Node $item) => $item->toString(), $this->items)
        );
    }

    public function toMarkdown(): string
    {
        return implode(
            array_map(fn(Node $item) => $item->toMarkdown(), $this->items)
        );
    }
}
