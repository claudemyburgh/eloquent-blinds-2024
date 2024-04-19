<?php

    dataset('routes', function () {
        return [
            'home',
            'categories.index',
            'categories.show',
            'legal.privacy-policy',
            'legal.warrants',
            'quote.index',
        ];
    });

    dataset('routes-dashboard', function () {
        return [
            'dashboard.index',
            'dashboard.categories.index',
            'dashboard.products.index',
            'dashboard.galleries.index',
            'dashboard.variants.index',

        ];
    });
