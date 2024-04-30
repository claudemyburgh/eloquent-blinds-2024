<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Services\Seo\Meta;
    use Illuminate\Http\Request;
    use Illuminate\View\View;

    class QuoteIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View
        {
            return view('quote', [
                'meta' => Meta::render([
                    'title' => 'Free Online Quote',
                    'description' => 'Feel free to request a Free online quote'
                ])
            ]);
        }
    }
