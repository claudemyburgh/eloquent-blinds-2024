<?php


    use App\Http\Controllers\Api\SearchResults;
    use Illuminate\Support\Facades\Route;

    Route::get("search", SearchResults::class)->name('search');
