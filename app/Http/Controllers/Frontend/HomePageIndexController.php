<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use App\Services\Seo\Meta;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\View\View;

    class HomePageIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View
        {
            return view('home', [
                'products' => Cache::remember('home-products', 60 * 60 * 24, fn() => Product::with('media', 'category')->where('popular', 1)->limit(4)->get()),
                'meta' => Meta::render()

            ]);
        }
    }
