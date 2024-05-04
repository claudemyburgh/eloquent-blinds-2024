<?php

    namespace App\Providers;

    use App\Models\Ad;
    use App\Models\Category;
    use App\Models\Gallery;
    use App\Models\MetaTag;
    use App\Models\Product;
    use App\Models\Variant;
    use Illuminate\Database\Eloquent\Relations\Relation;
    use Illuminate\Support\Facades\Schema;
    use Illuminate\Support\ServiceProvider;
    use Illuminate\Support\Str;
    use Propaganistas\LaravelPhone\PhoneNumber;

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
                'variant' => Variant::class,
                'as' => Ad::class,
                'tag' => MetaTag::class,
            ]);

            Str::macro('clickable', function ($text) {
                // Regular expression patterns
                $phonePattern = '/\b(\d{10,})\b/';
                $emailPattern = '/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/';
                $urlPattern = '/\b((?:https?:\/\/|www\.)\S+)\b/';

                // Replace phone numbers with clickable links
                $text = preg_replace_callback($phonePattern, function ($matches) {
                    $phoneNumber = new PhoneNumber($matches[0], 'ZA');
                    return '<a class="font-medium text-primary-600 hover:text-primary-500 hover-underline" href="tel:' . $phoneNumber . '">' . $phoneNumber->formatNational() . '</a>';
                }, $text);

                // Replace email addresses with clickable links
                $text = preg_replace_callback($emailPattern, function ($matches) {
                    $email = $matches[0];
                    return '<a class="font-medium text-primary-600 hover:text-primary-500 hover-underline" href="mailto:' . $email . '">' . $email . '</a>';
                }, $text);

                $text = preg_replace_callback($urlPattern, function ($matches) {
                    $url = $matches[0];
                    // Check if the URL starts with "www." and if so, prepend "http://" for proper link formatting

                    return '<a class="font-medium text-primary-600 hover:text-primary-500 hover-underline"  href="' . (str_starts_with($url, 'https://') ? '' : 'https://') . $url . '" target="_blank">' . $matches[0] . '</a>';
                }, $text);

                return $text;
            });

        }
    }
