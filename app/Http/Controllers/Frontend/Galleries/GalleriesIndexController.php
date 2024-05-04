<?php

namespace App\Http\Controllers\Frontend\Galleries;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Services\Seo\Meta;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class GalleriesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): View
    {
        return view('galleries.index', [
            'galleries' => Cache::remember('galleries', 360, fn () => Gallery::live()->with('media')->get()),
            'meta' => Meta::render([
                'title' => 'Gallery',
                'description' => 'Look through our awesome gallery',
            ]),
        ]);
    }
}
