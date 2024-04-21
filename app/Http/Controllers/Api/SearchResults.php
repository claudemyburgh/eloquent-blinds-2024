<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Search\SearchCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class SearchResults extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): SearchCollection
    {
        $data = Product::with('category')->get();

        return new SearchCollection($data);
    }
}
