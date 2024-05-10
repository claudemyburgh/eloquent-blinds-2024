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
        public function __construct(public $data)
        {
            //
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {

            return view('components.google.reviews.container', [
                'reviews' => $this->data['reviews'],
                'ratingCount' => $this->data['user_ratings_total'],
                'averageRating' => $this->data['rating']
            ]);
        }
    }
