<?php

namespace App\Observers;

use Illuminate\Support\Facades\Cache;

class CategoryObserver
{
    public function created(): void
    {
        Cache::flush();
    }

    public function updating(): void
    {
        Cache::flush();
    }

    public function deleted(): void
    {
        Cache::flush();
    }

    public function restored(): void
    {
        Cache::flush();
    }

    public function forceDeleted(): void
    {
        Cache::flush();
    }
}
