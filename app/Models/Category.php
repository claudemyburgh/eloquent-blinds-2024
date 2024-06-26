<?php

namespace App\Models;

use App\Observers\CategoryObserver;
use App\Traits\GalleryTrait;
use App\Traits\Live;
use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Tags\HasTags;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

#[ObservedBy([CategoryObserver::class])]
class Category extends Model implements HasMedia
{
    use GalleryTrait, HasFactory, HasRecursiveRelationships, HasTags, InteractsWithMedia, Live, Sluggable, SoftDeletes;

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'parent_id',
        'excerpt',
        'body',
        'popular',
        'live',
        'gallery',
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        foreach (config('image-conversion.default') as $key => $image) {
            $this->addMediaConversion($key)
                ->format($image['format'])
                ->blur($image['blur'])
                ->fit(Fit::Max, $image['height'], $image['height'])
                ->nonQueued();
        }
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default')
            ->useFallbackUrl(url(config('app.placeholder')));
    }
}
