<?php

    namespace App\Traits;

    use App\Models\Gallery;
    use Illuminate\Database\Eloquent\Relations\MorphOne;
    use Illuminate\Database\Eloquent\Relations\MorphTo;
    use Illuminate\Database\Eloquent\Relations\MorphToMany;

    trait GalleryTrait
    {
        /**
         * @return MorphTo
         */
        public function gallerieable(): MorphTo
        {
            return $this->morphTo();
        }


        /**
         * @return MorphToMany
         */
        public function galleries(): MorphToMany
        {
            return $this->morphToMany(Gallery::class, 'gallerieable');
        }

        /**
         * @return MorphOne
         */
        public function gallery(): MorphOne
        {
            return $this->morphOne(Gallery::class, 'gallerieable');
        }

    }
