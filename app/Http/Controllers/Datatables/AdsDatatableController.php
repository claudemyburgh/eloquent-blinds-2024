<?php

    namespace App\Http\Controllers\Datatables;

    use App\Http\Requests\Ads\StoreAdRequest;
    use App\Http\Requests\Ads\UpdateAdRequest;
    use App\Models\Ad;
    use Designbycode\EloquentDatatable\EloquentDatatableController;
    use Exception;
    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Inertia\Response;

    class AdsDatatableController extends EloquentDatatableController
    {
        protected bool $allowDeletion = true;

        protected bool $allowCreation = true;

        protected bool $allowEditing = true;

        protected bool $createUsingDialog = false;

        protected bool $allowSearching = true;

        protected int $defaultLimit = 25;

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
            return Ad::query();
        }

        /**
         * A description of the entire PHP function.
         *
         * @param Request $request description
         * @return Response
         * @throws Exception
         */
        public function index(Request $request): Response
        {
            return Inertia::render('Datatables/Index', $this->getResponse($request));
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreAdRequest $request)
        {
            $ad = Ad::create($request->validated());
            return to_route('dashboard.ads.edit', $ad);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id): Response
        {
            return Inertia::render('Dashboard/Ads/Edit', [
                'ad' => Ad::with('media', 'product')->find($id),
            ]);
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateAdRequest $request, string $id): void
        {
            $ad = Ad::findOrFail($id)->update($request->validated());
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
                $ad = Ad::find($request->id);
                $ad->addMultipleMediaFromRequest(['image'])
                    ->each(function ($fileAdder) {
                        $fileAdder
                            ->toMediaCollection('meta');
                    });
            }
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
            return ['id', 'title', 'content', 'link'];
        }

    }
