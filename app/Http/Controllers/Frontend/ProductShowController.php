<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Services\Seo\Meta;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class ProductShowController extends Controller
{
    public function __invoke(Category $category, Product $product): View
    {
        return view('products.show', [
            'product' => $product = Cache::remember('product-id-'.$product->id, 86400, fn () => $product->load(['media', 'galleries.media', 'variants.media'])),
            'category' => Cache::remember('product-category-id-'.$category->id, 86400, fn () => $category->load('products.media')),
            'meta' => Meta::render([
                'title' => $product->title,
                'description' => $product->excerpt,
                'image' => $product->getFirstMediaUrl('default', 'meta-tag'),
            ]),
        ]);
    }
}
