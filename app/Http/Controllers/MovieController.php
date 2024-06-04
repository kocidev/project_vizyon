<?php

namespace App\Http\Controllers;

use App\Services\TmdbService;
use Illuminate\Http\JsonResponse;

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

    /**
     * Display the movie upcomings.
     */
    public function upcomings(): Response
    {
        $upComings = $this->tmdbService->getMovieUpComing(1);
        $upComingsData = $upComings->isSuccess ? $upComings->data : [];

        return Inertia::render('Movie/UpComings/index', [
            'upComings' => $upComingsData
        ]);
    }

    /**
     * Display the movie popular.
     */
    public function trending(): Response
    {
        $trending = $this->tmdbService->getTrending("movie", "week", 1);
        $trendingData = $trending->isSuccess ? $trending->data : [];

        return Inertia::render('Movie/Trending/index', [
            'trending' => $trendingData
        ]);
    }

    /**
     * Display the movie popular.
     */
    public function popular(): Response
    {
        $popular = $this->tmdbService->getMoviePopular(1);
        $popularData = $popular->isSuccess ? $popular->data : [];

        return Inertia::render('Movie/Popular/index', [
            'popular' => $popularData
        ]);
    }

    /**
     * Display the movie goat.
     */
    public function goat(): Response
    {
        $goat = $this->tmdbService->getMovieGOAT(1);
        $goatData = $goat->isSuccess ? $goat->data : [];

        return Inertia::render('Movie/GOAT/index', [
            'goat' => $goatData
        ]);
    }
}
