<?php

    namespace App\Http\Controllers\Frontend\Categories;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use Illuminate\View\View;

    class CategoriesShowController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Category $category): View
        {
            return view('categories.show', [
                'category' => $category
            ]);
        }
    }
