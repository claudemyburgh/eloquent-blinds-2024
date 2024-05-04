<?php

namespace App\Http\Controllers\Frontend\Categories;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\Seo\Meta;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CategoriesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): View
    {
        $categories = Category::live()->with('media', 'products.media', 'tags')->tree()->get()->toTree();

        return view('categories.index', data: [
            'categories' => $categories,
            'meta' => Meta::render([
                'title' => 'Categories',
                'description' => 'Discover a world of stunning blinds as you explore our diverse product categories.',
                'image' => $categories[rand(0, $categories->count() - 1)]->getFirstMediaUrl('default', 'meta-tag'),
            ]),
        ]);
    }
}
