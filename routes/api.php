<?php

use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\PlatformController;
use App\Http\Controllers\Api\SeriesController;

use Illuminate\Support\Facades\Route;

Route::prefix('movie')->group(function () {
    Route::get('/theaters', [MovieController::class, 'getTheaters']);
});

Route::prefix('series')->group(function () {
    Route::get('/upcoming', [SeriesController::class, 'getUpComing']);
});

Route::prefix('platform')->group(function () {
    Route::get('/{platform}/content', [PlatformController::class, 'getPlatformContent']);
});
