<?php

    namespace App\Providers;

    use App\Models\Category;
    use App\Models\Gallery;
    use App\Models\Product;
    use App\Models\Variant;
    use Illuminate\Database\Eloquent\Relations\Relation;
    use Illuminate\Support\Facades\Schema;
    use Illuminate\Support\ServiceProvider;

    class AppServiceProvider extends ServiceProvider
    {
        /**
         * Register any application services.
         */
        public function register(): void
        {
            //
        }

        /**
         * Bootstrap any application services.
         */
        public function boot(): void
        {
            Schema::defaultStringLength(191);

            Relation::enforceMorphMap([
                'product' => Product::class,
                'category' => Category::class,
                'gallery' => Gallery::class,
                'variant' => Variant::class
            ]);
        }
    }
