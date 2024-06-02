<?php

namespace App\Http\Controllers;

use App\Services\TmdbService;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }

    public function index(): Response
    {
        $theaters = $this->tmdbService->getMovieNowPlaying(1);
        $upComings = $this->tmdbService->getMovieUpComing(1);

        $theatersData = $theaters->isSuccess ? $theaters->data : [];
        $upComingsData = $upComings->isSuccess ? $upComings->data : [];

        return Inertia::render('Home/index', [
            'theaters' => $theatersData,
            'upComings' => $upComingsData,
        ]);
    }
}
