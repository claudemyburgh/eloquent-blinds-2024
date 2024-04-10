<?php

namespace App\Composers;

use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class CategoriesComposer
{
    public function __construct(protected Category $categories)
    {

    }

    public function compose(View $view): void
    {
        $categories = Cache::remember('categories-list', 3600, fn () => Category::live()->tree()->get()->toTree());
        $view->with('categories', $categories);
    }
}
