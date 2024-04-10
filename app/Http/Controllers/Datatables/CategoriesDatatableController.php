<?php

    namespace App\Http\Controllers\Datatables;

    use App\Http\Requests\Categories\StoreCategoryRequest;
    use App\Http\Requests\Categories\UpdateCategoryRequest;
    use App\Models\Category;
    use Designbycode\EloquentDatatable\EloquentDatatableController;
    use Exception;
    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;
    use Inertia\Inertia;
    use Inertia\Response;

    class CategoriesDatatableController extends EloquentDatatableController
    {

        protected bool $allowDeletion = true;

        protected bool $allowCreation = true;

        protected bool $createUsingDialog = false;

        protected bool $allowSearching = true;

        protected int $defaultLimit = 10;

        protected string $sortDirection = 'desc';


        /**
         * @return void
         */
        public function __constructor(): void
        {
            parent::__construct();
            $this->middleware(['auth', 'verified']);
        }

        /**
         * A description of the entire PHP function.
         *
         * @return Builder
         */
        public function builder(): Builder
        {
            return Category::query();
        }

        /**
         * A description of the entire PHP function.
         *
         * @param Request $request description
         * @return array
         * @throws Exception
         */
        public function index(Request $request): Response
        {
            return Inertia::render("Datatables/Index", $this->getResponse($request));
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreCategoryRequest $request)
        {
            Cache::forget('categories-menu');
            $category = Category::create($request->validated());
            return to_route('dashboard.categories.edit', $category);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id): Response
        {
            $category = Category::with('media')->find($id);
            return Inertia::render('Dashboard/Categories/Edit', compact('category'));
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateCategoryRequest $request, string $id): void
        {
            Cache::forget('categories-menu');
            Cache::forget('categories-list');
            Category::findOrFail($id)
                ->update($request->validated());
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(string $ids): void
        {
            $this->itemsDelete($ids);
        }

        public function upload(Request $request): void
        {
            $request->validate([
                'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
            ]);

            if ($request->hasFile('image')) {
                $category = Category::find($request->id);
                $category->addMultipleMediaFromRequest(['image'])
                    ->each(function ($fileAdder) {
                        $fileAdder->toMediaCollection('default');
                    });
            }


//            if ($request->hasFile('image')) {
//                $category = Category::find($request->id);
//                $category->addMedia($request->image)
//                    ->toMediaCollection('default');
//            }
        }


        /**
         * Get the columns for the quick create form.
         *
         * @return array
         */
        protected function getQuickCreateColumns(): array
        {
            return ['title'];
        }

        /**
         * Retrieve displayable column names.
         *
         * @return array
         */
        protected function getDisplayableColumnNames(): array
        {
            return ['id', 'title', 'slug', 'popular', 'live',];
        }

    }
