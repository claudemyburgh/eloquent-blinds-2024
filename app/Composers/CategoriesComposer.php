<?php

    namespace App\Composers;

    use App\Models\Category;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\View\View;

    class CategoriesComposer
    {
        public function __construct(protected Category $categories)
        {

        }

        public function compose(View $view): void
        {
            $view->with('categories_with_all', Cache::remember('categories_with_all', 3600, fn() => Category::live()->with('media', 'products.media')->tree()->get()->toTree()));
        }
    }
