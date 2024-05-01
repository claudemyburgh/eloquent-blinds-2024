<?php

    use App\Http\Controllers\Frontend\Categories\CategoriesIndexController;
    use App\Http\Controllers\Frontend\Categories\CategoriesShowController;
    use App\Http\Controllers\Frontend\FAQIndexController;
    use App\Http\Controllers\Frontend\Galleries\GalleriesIndexController;
    use App\Http\Controllers\Frontend\HomePageIndexController;
    use App\Http\Controllers\Frontend\Legal\PrivacyPolicyIndexController;
    use App\Http\Controllers\Frontend\Legal\WarrantsIndexController;
    use App\Http\Controllers\Frontend\ProductShowController;
    use App\Http\Controllers\Frontend\QuoteIndexController;
    use App\Http\Controllers\Frontend\QuoteSendController;
    use App\Http\Controllers\ProfileController;
    use Illuminate\Support\Facades\Route;

    require __DIR__ . '/auth.php';
    require __DIR__ . '/dashboard.php';

    Route::get('/', HomePageIndexController::class)->name('home');
    Route::get('categories', CategoriesIndexController::class)->name('categories.index');
    Route::get('faqs', FAQIndexController::class)->name('faqs.index');
    Route::get('quote', QuoteIndexController::class)->name('quote.index');
    Route::post('quote', QuoteSendController::class)->name('quote.send');
    Route::get('categories/{category:slug}', CategoriesShowController::class)->name('categories.show');
    Route::get('{category:slug}/{product:slug}', ProductShowController::class)->name('products.show');
    Route::get('privacy-policy', PrivacyPolicyIndexController::class)->name('legal.privacy-policy');
    Route::get('warrants', WarrantsIndexController::class)->name('legal.warrants');
    Route::get('galleries', GalleriesIndexController::class)->name('galleries.index');

//    Route::get('tags', TagsIndexController::class)->name('tags.index');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
