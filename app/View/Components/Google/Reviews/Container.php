<?php

    namespace App\View\Components\Google\Reviews;

    use Closure;
    use Designbycode\GoogleMapsPlaceDetails\PlaceDetails;
    use Illuminate\Contracts\View\View;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\View\Component;

    class Container extends Component
    {

        private mixed $googleMapsPlaceId;
        private mixed $googleMapsApiKey;

        /**
         * Create a new component instance.
         */
        public function __construct()
        {
            $this->googleMapsApiKey = config('google.map.key');
            $this->googleMapsPlaceId = config('google.map.place_id');
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {

            $data = Cache::remember('reviews', 60 * 60 * 24, function () {
                return (new PlaceDetails($this->googleMapsApiKey, $this->googleMapsPlaceId))->getResults();
            });


            return view('components.google.reviews.container', [
                'reviews' => $data->reviews,
                'ratingCount' => $data->user_ratings_total,
                'averageRating' => $data->rating
            ]);
        }
    }
