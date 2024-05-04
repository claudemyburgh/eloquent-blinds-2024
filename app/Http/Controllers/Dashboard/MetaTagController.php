<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\MetaTag\StoreMetaTagRequest;
use App\Http\Requests\MetaTag\UpdateMetaTagRequest;
use App\Models\MetaTag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MetaTagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $meta_tag = MetaTag::with('media')->get();

        return Inertia::render('Dashboard/MetaTag/Index', compact('meta_tag'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMetaTagRequest $request): RedirectResponse
    {
        $tag = MetaTag::create($request->validated());

        return to_route('dashboard.meta-tag.edit', $tag);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        return Inertia::render('Dashboard/MetaTag/Edit', [
            'tag' => MetaTag::with('media')->find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMetaTagRequest $request, string $id)
    {
        MetaTag::find($id)->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        MetaTag::find($id)?->delete();
    }

    public function upload(Request $request): void
    {
        $request->validate([
            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        ]);

        if ($request->hasFile('image')) {
            $tag = MetaTag::find($request->id);
            $tag->addMultipleMediaFromRequest(['image'])
                ->each(function ($fileAdder) {
                    $fileAdder
                        ->toMediaCollection('default');
                });
        }
    }
}
