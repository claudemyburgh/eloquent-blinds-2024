<?php

    namespace App\Http\Controllers\Datatables;

    use App\Http\Requests\Galleries\StoreGalleryRequest;
    use App\Http\Requests\Galleries\UpdateGalleryRequest;
    use App\Models\Gallery;
    use Designbycode\EloquentDatatable\EloquentDatatableController;
    use Exception;
    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Inertia\Response;

    class GalleriesDatatableController extends EloquentDatatableController
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
            return Gallery::query();
        }

        /**
         * A description of the entire PHP function.
         *
         * @param Request $request description
         * @return Response
         *
         * @throws Exception
         */
        public function index(Request $request): Response
        {
            return Inertia::render('Datatables/Index', $this->getResponse($request));
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreGalleryRequest $request): RedirectResponse
        {
            $gallery = Gallery::create($request->validated());

            return to_route('dashboard.galleries.edit', $gallery);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id): Response
        {
            $gallery = Gallery::with('media')->find($id);

            return Inertia::render('Dashboard/Galleries/Edit', compact('gallery'));
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateGalleryRequest $request, string $id): void
        {
            Gallery::findOrFail($id)
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
                $gallery = Gallery::find($request->id);
                $gallery->addMultipleMediaFromRequest(['image'])
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
            return ['title'];
        }

        /**
         * Retrieve displayable column names.
         */
        protected function getDisplayableColumnNames(): array
        {
            return ['id', 'title', 'slug', 'live'];
        }
    }
