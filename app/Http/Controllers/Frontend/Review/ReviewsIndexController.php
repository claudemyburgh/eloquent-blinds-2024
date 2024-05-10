<?php

    namespace App\Http\Controllers\Frontend\Review;

    use App\Http\Controllers\Controller;
    use App\Services\Seo\Meta;
    use Exception;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Facades\Redirect;
    use Illuminate\View\View;

    class ReviewsIndexController extends Controller
    {
        private $googleMapsApiKey, $googleMapsPlaceId;

        public function __construct()
        {
            $this->googleMapsApiKey = config('google.map.key');
            $this->googleMapsPlaceId = config('google.map.place_id');
        }

        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View|RedirectResponse
        {

            try {
                $data = Cache::remember('reviews', 60 * 60 * 12, function () {
                    return Http::get('https://maps.googleapis.com/maps/api/place/details/json', [
                        'place_id' => $this->googleMapsPlaceId,
                        'key' => $this->googleMapsApiKey,
                        'fields' => 'user_ratings_total,rating,reviews,opening_hours,current_opening_hours',
                    ])->json();
                });

            } catch (Exception $e) {
                $data = null;
                return Redirect::to('https://g.page/r/CXWNSZcI_nGmEAI/review');

            }


            // author_name
            // author_url
            // language
            // rating
            // relative_time_description
            // time
            // profile_photo_url
            // user_ratings_total


            return view('reviews.index', [
                'data' => $data['result'] ?? null,
                'meta' => Meta::render([
                    'title' => 'Reviews',
                    'description' => 'Hear what our clients have to say about our shutter, blinds and service',
                ]),
            ]);
        }
    }
