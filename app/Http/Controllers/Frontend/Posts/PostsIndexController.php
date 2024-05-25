<?php

    namespace App\Http\Controllers\Frontend\Posts;

    use App\Http\Controllers\Controller;
    use App\Models\Post;
    use App\Services\Seo\Meta;
    use Illuminate\View\View;


    class PostsIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(): View
        {
            return view('posts.index', [
                'posts' => Post::paginate(10),
                'meta' => Meta::render([
                    'title' => 'Blog - Posts',
                    'description' => 'List of blog posts',
                ]),
            ]);
        }
    }
