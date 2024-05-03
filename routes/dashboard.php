<?php

    use App\Http\Controllers\Dashboard\ActionsController;
    use App\Http\Controllers\Dashboard\DashboardIndexController;
    use App\Http\Controllers\Datatables\AdsDatatableController;
    use App\Http\Controllers\Datatables\CategoriesDatatableController;
    use App\Http\Controllers\Datatables\ClientDatatableController;
    use App\Http\Controllers\Datatables\GalleriesDatatableController;
    use App\Http\Controllers\Datatables\ProductsDatatableController;
    use App\Http\Controllers\Datatables\VariantsDatatableController;
    use App\Http\Controllers\ImageDestroyController;
    use Illuminate\Support\Facades\Route;

    Route::group([
        'prefix' => 'dashboard',
        'as' => 'dashboard.',
        'middleware' => ['auth', 'verified'],
    ], function () {
        Route::get('/', DashboardIndexController::class)->name('index');
        Route::datatable('products', ProductsDatatableController::class);
        Route::datatable('categories', CategoriesDatatableController::class);
        Route::datatable('clients', ClientDatatableController::class);
        Route::datatable('galleries', GalleriesDatatableController::class);
        Route::datatable('variants', VariantsDatatableController::class);
        Route::datatable('ads', AdsDatatableController::class);

        Route::post('categories/{category}/upload', [CategoriesDatatableController::class, 'upload'])->name('categories.upload');
        Route::post('products/{product}/upload', [ProductsDatatableController::class, 'upload'])->name('products.upload');
        Route::post('galleries/{gallery}/upload', [GalleriesDatatableController::class, 'upload'])->name('galleries.upload');
        Route::post('variants/{variant}/upload', [VariantsDatatableController::class, 'upload'])->name('variants.upload');
        Route::post('ads/{ad}/upload', [AdsDatatableController::class, 'upload'])->name('ads.upload');

        // For all media deletion
        Route::delete('{media}', ImageDestroyController::class)->name('media.delete');

        // For action
        Route::post('/sitemap', [ActionsController::class, 'sitemap'])->name('action.sitemap');
        Route::post('/cache-clear', [ActionsController::class, 'cache_clear'])->name('action.cache_clear');
        Route::post('/view-clear', [ActionsController::class, 'view_clear'])->name('action.view_clear');
        Route::post('/image-clean', [ActionsController::class, 'image_clean'])->name('action.image_clean');
    });
