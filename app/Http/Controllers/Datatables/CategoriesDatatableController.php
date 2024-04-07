<?php

    namespace App\Http\Controllers\Datatables;

    use App\Http\Requests\Categories\StoreCategoryRequest;
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
        public function edit(string $id)
        {
            // TODO: return view edit
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, string $id): void
        {
            // TODO: Model update
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(string $ids): void
        {
            $this->itemsDelete($ids);
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
