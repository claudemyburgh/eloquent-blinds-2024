<?php

namespace App\Http\Controllers\Datatables;

use App\Http\Requests\Variants\StoreVariantRequest;
use App\Http\Requests\Variants\UpdateVariantRequest;
use App\Models\Variant;
use Designbycode\EloquentDatatable\EloquentDatatableController;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VariantsDatatableController extends EloquentDatatableController
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
        return Variant::query();
    }

    /**
     * A description of the entire PHP function.
     *
     * @param  Request  $request  description
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
    public function store(StoreVariantRequest $request): RedirectResponse
    {
        $variant = Variant::create($request->validated());

        return to_route('dashboard.variants.edit', $variant);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        return Inertia::render('Dashboard/Variants/Edit', [
            'variant' => Variant::with('media')->find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVariantRequest $request, string $id): void
    {
        Variant::findOrFail($id)->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $ids): void
    {
        $this->itemsDelete($ids);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        ]);

        if ($request->has('image')) {
            Variant::find($request->id)
                ->addMedia($request->image)
                ->toMediaCollection('default');
        }

    }

    /**
     * Get the columns for the quick create form.
     */
    protected function getQuickCreateColumns(): array
    {
        return ['name', 'code', 'product_id'];
    }

    /**
     * Retrieve displayable column names.
     */
    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'name', 'code', 'product_id', 'live'];
    }
}
