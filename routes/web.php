<?php

    use App\Http\Controllers\Frontend\HomePageIndexController;
    use App\Http\Controllers\ProfileController;
    use Illuminate\Support\Facades\Route;

    Route::get('/', HomePageIndexController::class)->name("home");
    Route::get('about', function () {
        return "about";
    })->name('about');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__ . '/auth.php';
    require __DIR__ . '/dashboard.php';
