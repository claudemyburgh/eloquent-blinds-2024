<?php

    return [
        'links' => [
            (object)[
                'name' => 'Home',
                'slug' => 'home',
                'route' => 'home',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => true,
            ],
            (object)[
                'name' => 'Shutters',
                'slug' => 'shutters',
                'route' => 'categories.index',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => true,
            ],
            (object)[
                'name' => 'Blinds',
                'slug' => 'blinds',
                'route' => 'categories.index',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => true,
            ],
            (object)[
                'name' => 'Faqs',
                'slug' => 'faqs',
                'route' => 'faqs.index',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => true,
            ],
            (object)[
                'name' => 'Reviews',
                'slug' => 'reviews',
                'route' => 'reviews.index',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => false,
            ],
            (object)[
                'name' => 'Gallery',
                'slug' => 'galleries',
                'route' => 'galleries.index',
                'classes' => 'hover:text-primary-500 dark:text-shadow ',
                'show' => true,
            ],
            (object)[
                'name' => 'Free Quote',
                'slug' => 'quote',
                'route' => 'quote.index',
                'data' => 'data',
                'classes' => 'btn btn-gradient text-white',
                'show' => true,
            ],
        ],
    ];
