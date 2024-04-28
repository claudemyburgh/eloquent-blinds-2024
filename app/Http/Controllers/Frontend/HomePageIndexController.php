<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;

    class HomePageIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request)
        {


            return view('home', [
                'products' => $products = Cache::remember('home-products', 60 * 60 * 24, fn() => Product::with('media', 'category')->where('popular', 1)->limit(4)->get()),
            ]);
        }
    }
