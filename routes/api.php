<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

Route::get('/movies/theaters', [MovieController::class, 'getTheaters']);
