<?php

namespace App\Providers;

use App\Composers\CategoriesComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        View::composer('*', CategoriesComposer::class);
    }
}
