<?php

    namespace App\View\Components\Google\Reviews;

    use Closure;
    use Illuminate\Contracts\View\View;
    use Illuminate\View\Component;

    class Stats extends Component
    {
        /**
         * Create a new component instance.
         */
        public function __construct(public $reviews, public $count = null, public $ratingCount = null, public $averageRating = null)
        {
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {
            return view('components.google.reviews.stats');
        }
    }
