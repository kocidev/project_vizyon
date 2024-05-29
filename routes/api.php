<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\SeriesController;
use Illuminate\Support\Facades\Route;

Route::prefix('movies')->group(function () {
    Route::get('/theaters', [MovieController::class, 'getTheaters']);
});

Route::prefix('series')->group(function () {
    Route::get('/upcoming', [SeriesController::class, 'getUpComing']);
});

Route::prefix('platforms')->group(function () {
    Route::get('/upcoming', [SeriesController::class, 'getUpComing']);
});
