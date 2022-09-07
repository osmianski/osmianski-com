<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\BlogPost
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $notion_id
 * @property string $notion_created_at
 * @property string $notion_updated_at
 * @property string|null $notion_title
 * @property mixed|null $notion_tags
 * @property string|null $notion_body_format
 * @property string|null $notion_body
 * @method static \Database\Factories\BlogPostFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost query()
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionBodyFormat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionTags($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereNotionUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BlogPost whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class BlogPost extends Model
{
    use HasFactory;
}
