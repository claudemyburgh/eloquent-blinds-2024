<?php

namespace App\Models;

use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\AlignPosition;
use Spatie\Image\Enums\Fit;
use Spatie\Image\Enums\Unit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MetaTag extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Sluggable;

    protected $fillable = [
        'title',
        'slug',
        'description',
    ];

    public function registerMediaConversions(?Media $media = null): void
    {
        $image = config('image-conversion.meta-tag');
        $this->addMediaConversion('meta-tags')
            ->format($image['format'])
            ->blur($image['blur'])
            ->fit(Fit::Crop, $image['width'], $image['height'])
            ->watermark(public_path('/img/watermark.png'),
                AlignPosition::BottomRight,
                paddingX: 3,
                paddingY: 3,
                paddingUnit: Unit::Percent,
                width: 40,
                widthUnit: Unit::Percent,
                height: 22,
                heightUnit: Unit::Percent,
            )
            ->nonQueued();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default')
            ->useFallbackUrl(url(config('app.placeholder_meta_image')));
    }
}
