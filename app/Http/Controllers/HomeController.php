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
        $result = $this->tmdbService->getMovieNowPlaying(1);

        if (!$result->isSuccess) {
            return Inertia::render('Home/index', [
                'theaters' => [],
                'error' => $result->error
            ]);
        }

        return Inertia::render('Home/index', [
            'theaters' => $result->data
        ]);
    }
}
