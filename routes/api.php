<?php

use App\Http\Controllers\Api\DiscoverController;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\PlatformController;
use App\Http\Controllers\Api\SeriesController;
use App\Http\Controllers\Api\TrendingControllerr;
use Illuminate\Support\Facades\Route;

Route::prefix('movie')->group(function () {
    Route::get('/theaters', [MovieController::class, 'getTheaters']);
    Route::get('/upcomings', [MovieController::class, 'getUpComings']);
    Route::get('/popular', [MovieController::class, 'getPopular']);
    Route::get('/goat', [MovieController::class, 'getGoat']);
    Route::get('/{movie}/videos', [MovieController::class, 'getVideosByMovieId']);
});

Route::prefix('trending')->group(function () {
    Route::get('/{type}/{window}', [TrendingControllerr::class, 'getTrending']);
});

Route::prefix('series')->group(function () {
    Route::get('/upcomings', [SeriesController::class, 'getUpComings']);
});

Route::prefix('platform')->group(function () {
    Route::get('/{platform}/popular', [PlatformController::class, 'getPlatformPopular']);
});

Route::prefix('discover')->group(function () {
    Route::get('/{type}', [DiscoverController::class, 'getShows']);
});
