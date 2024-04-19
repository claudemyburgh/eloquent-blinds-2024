<?php

    namespace App\Http\Controllers\Datatables;

    use App\Http\Requests\Products\StoreProductRequest;
    use App\Http\Requests\Products\UpdateProductRequest;
    use App\Models\Gallery;
    use App\Models\Product;
    use Designbycode\EloquentDatatable\EloquentDatatableController;
    use Exception;
    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Inertia\Response;

    class ProductsDatatableController extends EloquentDatatableController
    {
        protected bool $allowDeletion = true;

        protected bool $allowCreation = true;

        protected bool $createUsingDialog = false;

        protected bool $allowSearching = true;

        protected int $defaultLimit = 10;

        protected string $sortDirection = 'desc';

        public function __constructor(): void
        {
            parent::__construct();
            $this->middleware(['auth', 'verified']);
        }

        /**
         * A description of the entire PHP function.
         */
        public function builder(): Builder
        {
            return Product::query();
        }

        /**
         * A description of the entire PHP function.
         *
         * @param Request $request description
         *
         * @throws Exception
         */
        public function index(Request $request): Response
        {
//            dd($this->getResponse($request));
            return Inertia::render('Datatables/Index', $this->getResponse($request));
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreProductRequest $request)
        {
            $product = Product::create($request->validated());
            return to_route('dashboard.products.edit', $product);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id): Response
        {
            return Inertia::render('Dashboard/Products/Edit', [
                'product' => Product::with('media', 'galleries')->find($id),
                'galleries' => Gallery::get(),
            ]);
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateProductRequest $request, string $id): void
        {
            $product = Product::findOrFail($id);
            $product->update($request->except(['gallery']));
            if ($request->filled('gallery')) {
                $product->galleries()->sync($request->only(['gallery']));
            } else {
                $product->galleries()->detach();
            }
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
                $product = Product::find($request->id);
                $product->addMultipleMediaFromRequest(['image'])
                    ->each(function ($fileAdder) {
                        $fileAdder->toMediaCollection('default');
                    });
            }
        }

        /**
         * Get the columns for the quick create form.
         */
        protected function getQuickCreateColumns(): array
        {
            return ['title', 'category_id'];
        }

        /**
         * Retrieve displayable column names.
         */
        protected function getDisplayableColumnNames(): array
        {
            return ['id', 'title', 'slug', 'popular', 'live'];
        }
    }
