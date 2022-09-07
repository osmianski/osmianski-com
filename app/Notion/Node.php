<?php

namespace App\Notion;

use App\Exceptions\NotImplemented;
use App\Object_;

class Node extends Object_
{
    public function toMarkdown(): string
    {
        throw new NotImplemented();
    }

    public function toString(): string
    {
        throw new NotImplemented();
    }
}
