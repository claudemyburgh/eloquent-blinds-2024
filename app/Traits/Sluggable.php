<?php

    namespace App\Traits;


    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Support\Str;

    trait Sluggable
    {

        public Model $model;

        protected static function bootSluggable(): void
        {
            static::creating(function (Model $model): void {

                /** @var $model TYPE_NAME */
                $model->uuid = Str::uuid()->toString();

                if (!$model->slug) {
                    $model->slug = $model->uuid;
                }
            });

            static::updating(function (Model $model): void {
                $model->slug = Str::slug($model->slug);
            });
        }
    }
