<?php

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

Route::prefix('movie')->group(function () {
    Route::get('/theaters', [MovieController::class, 'theaters'])->name("movie.theaters");
    Route::get('/upcomings', [MovieController::class, 'upcomings'])->name("movie.upcomings");
    Route::get('/{movie}', [MovieController::class, 'show'])->name("movie.show");
});

require __DIR__ . '/auth.php';
