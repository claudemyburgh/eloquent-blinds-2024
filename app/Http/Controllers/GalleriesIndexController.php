<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
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
        ]);
    }
}
