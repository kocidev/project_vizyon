<?php

namespace App\Http\Controllers;

use App\Services\TmdbService;
use Illuminate\Http\JsonResponse;
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

    public function show(): JsonResponse
    {
        abort(404);
    }


    /**
     * Display the movie theaters.
     */
    public function theaters(): Response
    {
        $theaters = $this->tmdbService->getMovieNowPlaying(1);
        $theatersData = $theaters->isSuccess ? $theaters->data : [];

        return Inertia::render('Movie/Theaters/index', [
            'theaters' => $theatersData
        ]);
    }
}
