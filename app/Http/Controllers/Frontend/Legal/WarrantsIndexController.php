<?php

    namespace App\Http\Controllers\Frontend\Legal;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\View\View;

    class WarrantsIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View
        {
            return view('legal.warrants');
        }
    }
