<?php

    namespace App\Http\Controllers\Frontend\Categories;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use Illuminate\Http\Request;
    use Illuminate\View\View;

    class CategoriesIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View
        {
            $categories = Category::live()->with('media', 'products')->paginate(1);

            return view('categories.index', data: [
                'categories' => $categories
            ]);
        }
    }
