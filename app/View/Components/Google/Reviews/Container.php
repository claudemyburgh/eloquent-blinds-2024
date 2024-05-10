<?php

    namespace App\View\Components\Google\Reviews;

    use Closure;
    use Illuminate\Contracts\View\View;
    use Illuminate\View\Component;

    class Container extends Component
    {
        /**
         * Create a new component instance.
         */
        public function __construct()
        {
            //
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {
            $reviews = collect([
                [
                    "id" => 1,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 2,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 3,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p> <p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 5,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 6,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 7,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 8,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely, Thanks</p>"
                ],
                [
                    "id" => 9,
                    "rating" => 5,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 10,
                    "rating" => 2,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 11,
                    "rating" => 1,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 12,
                    "rating" => 1,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
                [
                    "id" => 13,
                    "rating" => 3,
                    "author" => "Claude Myburgh",
                    "avatar" => "https://github.com/designbycode.png?size=50",
                    "content" => "<p>Absolutely thrilled with the window blinds and installation service provided by this business! The quality of the blinds is top-notch, and the installation was done flawlessly. The team was
                    professional, friendly, and efficient. Highly recommend their services!</p>"
                ],
            ]);

            $ratingCount = $reviews->groupBy('rating')->map->count();

            $sum = 0;
            foreach ($ratingCount as $rating => $count) {
                $sum += $rating * $count;
            }

            $averageRating = $sum / $reviews->count();

            return view('components.google.reviews.container', [
                'reviews' => $reviews,
                'count' => $reviews->count(),
                'ratingCount' => $ratingCount,
                'averageRating' => $averageRating
            ]);
        }
    }
