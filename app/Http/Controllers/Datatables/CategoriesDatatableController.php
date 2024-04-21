<?php

namespace App\Http\Controllers\Datatables;

use App\Http\Requests\Categories\StoreCategoryRequest;
use App\Http\Requests\Categories\UpdateCategoryRequest;
use App\Models\Category;
use App\Models\Gallery;
use Designbycode\EloquentDatatable\EloquentDatatableController;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
        return Category::query();
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
    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        $category = Category::create($request->validated());

        return to_route('dashboard.categories.edit', $category);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        return Inertia::render('Dashboard/Categories/Edit', [
            'category' => Category::with('media', 'galleries')->find($id),
            'galleries' => Gallery::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, string $id): void
    {
        $category = Category::findOrFail($id);
        $category->update($request->except('gallery'));
        $category->galleries()->sync($request->filled('gallery') ? $request->only('gallery') : []);
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
        return ['id', 'title', 'slug', 'popular', 'live'];
    }
}
