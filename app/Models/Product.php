<?php

    namespace App\Models;

    use App\Traits\GalleryTrait;
    use App\Traits\Live;
    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;
    use Illuminate\Database\Eloquent\Relations\HasMany;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Spatie\Image\Enums\Fit;
    use Spatie\MediaLibrary\HasMedia;
    use Spatie\MediaLibrary\InteractsWithMedia;
    use Spatie\MediaLibrary\MediaCollections\Models\Media;
    use Spatie\Searchable\Searchable;
    use Spatie\Searchable\SearchResult;
    use Spatie\Tags\HasTags;

    class Product extends Model implements HasMedia, Searchable
    {
        use GalleryTrait, HasFactory, HasTags, InteractsWithMedia, Live, Sluggable, SoftDeletes;

        protected $fillable = [
            'category_id',
            'title',
            'slug',
            'excerpt',
            'body',
            'live',
            'popular',
            'guarantee',
            'gallery',
            'product_range',
            'supplier',
            'supplier_code',
        ];

        public function category(): BelongsTo
        {
            return $this->belongsTo(Category::class);
        }

        public function variants(): HasMany
        {
            return $this->hasMany(Variant::class);
        }

        public function registerMediaConversions(?Media $media = null): void
        {
            foreach (config('image-conversion') as $key => $image) {
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

        public function getSearchResult(): SearchResult
        {
            return new SearchResult($this, $this->title, $this->slug);
        }
    }
