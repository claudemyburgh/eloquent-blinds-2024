<?php

    namespace App\Traits;

    use Illuminate\Database\Eloquent\Builder;

    trait Live
    {
        /**
         * @param Builder $builder
         * @return Builder
         */
        public function scopeLive(Builder $builder): Builder
        {
            return $builder->where('live', true);
        }
    }
