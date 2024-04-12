<?php

    namespace App\Models;

    use App\Traits\Live;
    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Spatie\Image\Enums\Fit;
    use Spatie\MediaLibrary\HasMedia;
    use Spatie\MediaLibrary\InteractsWithMedia;
    use Spatie\MediaLibrary\MediaCollections\Models\Media;

    class Gallery extends Model implements HasMedia
    {
        use HasFactory, Sluggable, InteractsWithMedia, Live;

        protected $fillable = [
            'uuid',
            'title',
            'slug',
            'description',
            'body',
            'live',
        ];

        /**
         * @param Media|null $media
         * @return void
         */
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

        /**
         * @return void
         */
        public function registerMediaCollections(): void
        {
            $this->addMediaCollection('default')
                ->useFallbackUrl(url(config('app.placeholder')));
        }

    }
