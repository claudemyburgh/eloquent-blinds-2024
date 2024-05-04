<?php

namespace App\Http\Controllers\Frontend\Legal;

use App\Http\Controllers\Controller;
use App\Services\Seo\Meta;
use Illuminate\Http\Request;
use Illuminate\View\View;

class WarrantsIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): View
    {
        return view('legal.warrants', [
            'meta' => Meta::render([
                'title' => 'Warrants',
                'description' => 'Warrants details',
            ]),
        ]);
    }
}
