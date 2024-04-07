<?php

    use App\Http\Controllers\Dashboard\DashboardIndexController;
    use App\Http\Controllers\Datatables\CategoriesDatatableController;
    use Illuminate\Support\Facades\Route;

    Route::group([
        'prefix' => 'dashboard',
        'as' => 'dashboard.',
        'middleware' => ['auth', 'verified']
    ], function () {
        Route::get("/", DashboardIndexController::class)->name('index');
        Route::datatable('categories', CategoriesDatatableController::class);

    });
