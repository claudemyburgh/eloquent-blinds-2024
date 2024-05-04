<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;

class ActionsController extends Controller
{
    public function sitemap(): void
    {
        set_time_limit(0);
        Artisan::call('sitemap:generate');
    }

    public function cache_clear(): void
    {
        Artisan::call('cache:clear');
    }

    public function view_clear(): void
    {
        Artisan::call('view:clear');
    }

    public function image_clean(): void
    {
        Artisan::call('media-library:clean');
    }

    public function route_clear(): void
    {
        Artisan::call('route:clear');
    }
}
