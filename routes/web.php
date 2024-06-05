<?php

use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profil', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('film')->group(function () {
    Route::get('/vizyondakiler', [MovieController::class, 'theaters'])->name("movie.theaters");
    Route::get('/cok-yakinda', [MovieController::class, 'upcomings'])->name("movie.upcomings");
    Route::get('/trendler', [MovieController::class, 'trending'])->name("movie.trending");
    Route::get('/populer', [MovieController::class, 'popular'])->name("movie.popular");
    Route::get('/en-iyiler', [MovieController::class, 'goat'])->name("movie.goat");
    Route::get('/{movie}', [MovieController::class, 'show'])->name("movie.show");
});

Route::get('/kesfet', [DiscoverController::class, 'show'])->name('discover');

require __DIR__ . '/auth.php';
