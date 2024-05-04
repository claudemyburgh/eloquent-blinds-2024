<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\MetaTag;
use App\Services\Seo\Meta;
use Illuminate\Support\Facades\Redirect;

class ExploreController extends Controller
{
    public function index(MetaTag $metaTag)
    {
        if (! $metaTag->count()) {
            return Redirect::route('home');
        }

        $tag = $metaTag->with('media')->inRandomOrder()->first();

        return view('explore', [
            'meta' => Meta::render([
                'title' => $tag->title,
                'description' => $tag->description,
                'image' => $tag->getFirstMediaUrl('default', 'meta-tag'),
            ]),
            'tag' => $tag,
        ]);
    }
}
