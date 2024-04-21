<?php

use App\Http\Controllers\Api\SearchResults;
use App\Http\Controllers\Api\SendEmailController;
use Illuminate\Support\Facades\Route;

Route::get('search', SearchResults::class)->name('search');
Route::post('send-quote', SendEmailController::class);
