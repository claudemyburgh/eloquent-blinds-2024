<?php

    namespace App\Services\Google;

    use Exception;
    use Illuminate\Support\Collection;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Facades\Log;


    class Review
    {
        private string $apiKey;

        public function __construct($apiKey)
        {
            $this->apiKey = $apiKey;
        }

        public function getReviews(): Collection
        {

            try {
                $response = Http::get("https://maps.googleapis.com/maps/api/place/details/json", [
                    'place_id' => config('google.map.place_id'),
                    'key' => $this->apiKey,
                ]);

                $responseData = json_decode($response->body(), true);

                if (!isset($responseData['result']['reviews'])) {
                    return collect(); // Return an empty collection if no reviews are found
                }

                return collect($responseData['result']['reviews']);
            } catch (Exception $e) {
                Log::error("Error fetching reviews from Google Maps API: " . $e->getMessage());
                return collect(); // Return an empty collection on error
            }
        }


    }
