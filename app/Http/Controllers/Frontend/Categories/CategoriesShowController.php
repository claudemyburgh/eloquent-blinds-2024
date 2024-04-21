<?php

namespace App\Http\Controllers\Frontend\Categories;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class CategoriesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Category $category): View
    {
        return view('categories.show', [
            'category' => Cache::rememberForever('category-'.$category->id, fn () => $category->load('media', 'products.media')),
            'descendants' => Cache::rememberForever('descendants-'.$category->id, fn () => $category->load('descendants.products.media')),
        ]);
    }
}
