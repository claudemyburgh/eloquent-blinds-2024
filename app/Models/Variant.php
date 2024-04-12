<?php

    namespace App\Models;

    use App\Traits\Live;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;
    use Spatie\Image\Enums\Fit;
    use Spatie\MediaLibrary\HasMedia;
    use Spatie\MediaLibrary\InteractsWithMedia;
    use Spatie\MediaLibrary\MediaCollections\Models\Media;

    class Variant extends Model implements HasMedia
    {
        use HasFactory, Live, InteractsWithMedia;

        protected $fillable = ['name', 'code', 'product_id', 'live', 'popular'];

        public function product(): BelongsTo
        {
            return $this->belongsTo(Product::class);
        }

        public function registerMediaConversions(?Media $media = null): void
        {
            foreach (config('image-conversion') as $key => $image) {
                $this->addMediaConversion($key)
                    ->format($image['format'])
                    ->blur($image['blur'])
                    ->fit(Fit::Fill, $image['height'], $image['height'])
                    ->nonQueued();
            }
        }

        public function registerMediaCollections(): void
        {
            $this->addMediaCollection('default')
                ->singleFile()
                ->useFallbackUrl(url(config('app.placeholder')));
        }


    }
