<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\View\View;

    class ProductsIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View
        {
            return view('products.show');
        }
    }
