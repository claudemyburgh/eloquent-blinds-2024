<?php

namespace App\Http\Controllers\Datatables;

use App\Models\Client;
use Designbycode\EloquentDatatable\EloquentDatatableController;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClientDatatableController extends EloquentDatatableController
{
    protected bool $allowDeletion = false;

    protected bool $allowCreation = false;

    protected bool $createUsingDialog = false;

    protected bool $allowEditing = false;

    protected bool $allowSearching = true;

    protected int $defaultLimit = 25;

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
        return Client::query();
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
    public function store(Request $request)
    {
        // TODO: return to_route('dashboard.products.edit', $post);
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
     */
    protected function getQuickCreateColumns(): array
    {
        return [''];
    }

    /**
     * Retrieve displayable column names.
     */
    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'first_name', 'last_name', 'email', 'phone'];
    }
}
