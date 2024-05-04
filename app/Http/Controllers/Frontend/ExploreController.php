<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\MetaTag;
    use App\Services\Seo\Meta;
    use Illuminate\Contracts\Foundation\Application;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Contracts\View\View;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\Support\Facades\Redirect;

    class ExploreController extends Controller
    {
        /**
         * @param MetaTag $metaTag
         * @return Application|Factory|View|\Illuminate\Foundation\Application|RedirectResponse
         */
        public function index(MetaTag $metaTag)
        {
            if (!$metaTag->count()) {
                return Redirect::route('home');
            }

            $tag = $metaTag->with('media')->inRandomOrder()->first();

            return view('explore', [
                'meta' => Meta::render([
                    'title' => $tag->title,
                    'description' => $tag->description,
                    'image' => $tag->getFirstMediaUrl('default', 'meta-tags'),
                ]),
                'categories' => Cache::get('categories_with_all'),
                'tag' => $tag,
            ]);
        }
    }
