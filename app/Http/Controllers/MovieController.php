<?php

namespace App\Http\Controllers;

use App\Services\TmdbService;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }

    /**
     * Display the movie theaters.
     */
    public function theaters(Request $request): Response
    {
        $theaters = $this->tmdbService->getMovieNowPlaying(1);
        return Inertia::render('Movie/Theaters/index', [
            'theaters' => $theaters
        ]);
    }
}
