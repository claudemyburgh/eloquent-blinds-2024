<?php

dataset('routes', function () {
    return [
        'home',
        'categories.show',
        'categories.index',
        'galleries.index',
        //            'products.show',
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
