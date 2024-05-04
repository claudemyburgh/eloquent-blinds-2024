<?php

namespace App\Models;

use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Ad extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Sluggable;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'product_id',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $image = config('image-conversion.ads');
        $this->addMediaConversion('ads')
            ->format($image['format'])
            ->blur($image['blur'])
            ->fit(Fit::Fill)
            ->nonQueued();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('ads')
            ->useFallbackUrl(url(config('app.placeholder')));
    }
}
