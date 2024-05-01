<?php

    namespace App\Services\Seo;

    class Meta
    {

        public static function render(array $meta = []): array
        {
            $defaultMeta = [
                'title' => 'Supplier and installer of Shutters and Blinds.',
                'description' => 'We offer a wide range of high-quality shutters and blinds at affordable prices. Our shutters and blinds are perfect for any room in the house and will add style and function to your space.',
                'image' => resource_path('img/meta/eloquent.jpg'),
                // Add additional meta tags here
//                'keywords' => 'shutters, blinds, window treatments',
//                'author' => 'Your Name',
                // Add more meta tags as needed
            ];

            return array_merge($defaultMeta, $meta);
        }

    }
