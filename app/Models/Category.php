<?php

    namespace App\Models;

    use App\Traits\GalleryTrait;
    use App\Traits\Live;
    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\HasMany;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Spatie\Image\Enums\Fit;
    use Spatie\MediaLibrary\HasMedia;
    use Spatie\MediaLibrary\InteractsWithMedia;
    use Spatie\MediaLibrary\MediaCollections\Models\Media;
    use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

    class Category extends Model implements HasMedia
    {
        use HasFactory, HasRecursiveRelationships, InteractsWithMedia, Live, Sluggable, SoftDeletes, GalleryTrait;

        protected $fillable = [
            'uuid',
            'title',
            'slug',
            'parent_id',
            'excerpt',
            'body',
            'popular',
            'live',
            'gallery'
        ];

        public function products(): HasMany
        {
            return $this->hasMany(Product::class);
        }

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
