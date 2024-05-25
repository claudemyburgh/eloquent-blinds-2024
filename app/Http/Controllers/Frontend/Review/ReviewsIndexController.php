<?php

    namespace App\Http\Controllers\Frontend\Review;

    use App\Http\Controllers\Controller;
    use App\Services\Seo\Meta;
    use Illuminate\View\View;

    class ReviewsIndexController extends Controller
    {

        public function __construct()
        {

        }

        /**
         * Handle the incoming request.
         */
        public function __invoke(): View
        {
            return view('reviews.index', [
                'meta' => Meta::render([
                    'title' => 'Reviews',
                    'description' => 'Hear what our clients have to say about our shutter, blinds and service',
                ]),
            ]);
        }
    }
