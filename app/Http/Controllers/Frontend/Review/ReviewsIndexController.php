<?php

    namespace App\Http\Controllers\Frontend\Review;

    use App\Http\Controllers\Controller;
    use App\Services\Seo\Meta;
    use Exception;
    use GuzzleHttp\Client;
    use Illuminate\Http\Request;

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
        public function __invoke(Request $request)
        {

            $client = new Client();
            $url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={$this->googleMapsPlaceId}&key={$this->googleMapsApiKey}";

            try {
                $response = $client->get($url);
                $data = json_decode($response->getBody()->getContents(), true);

                $reviews = $data['result']['reviews'];

                return response()->json($reviews);
            } catch (Exception $e) {
                return response()->json(['error' => 'Failed to fetch reviews'], 500);
            }

            return view('reviews.index', [
                'meta' => Meta::render([
                    'title' => 'Reviews',
                    'description' => 'Hear what our clients have to say about our shutter, blinds and service',
                ]),
            ]);
        }
    }
