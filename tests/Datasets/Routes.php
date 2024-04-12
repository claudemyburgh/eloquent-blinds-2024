<?php

    use Illuminate\Support\Facades\Route;

    dataset('routes', function () {
        return array_values(collect(Route::getRoutes())
            ->filter(fn($route) => in_array('GET', $route->methods()))
            ->filter(fn($route) => in_array('web', $route->gatherMiddleware()))
            ->reject(fn($route) => in_array($route->uri, ['sanctum/csrf-cookie', 'reset-password/{token}', 'login', 'register', 'forgot-password']))
            ->reject(fn($route) => in_array('auth', $route->gatherMiddleware()))
            ->map(function ($route) {
                return $route->uri();
            })->toArray());
    });

    dataset('routes-dashboard', function () {
        return [
            'dashboard.index',
            'dashboard.categories.index',
            'dashboard.products.index',
//            'dashboard.galleries.index',
        ];
    });
