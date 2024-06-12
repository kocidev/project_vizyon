<?php

namespace App\Http\Controllers;

use App\Services\TmdbService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DiscoverController extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }

    function show(Request $request): Response
    {
        $request->validate([
            's' => 'nullable|min:3',
        ]);
        $s = $request->query('s', null);

        if ($s) {
            $year = $request->query('year', null);
            $filters = [
                'query' => $s,
                'year' => $year
            ];
            $result = $this->tmdbService->searchWithParams("movie", $filters, 1);
            $resultData = $result->isSuccess ? $result->data : [];
        } else {
            $result = $this->tmdbService->getMoviePopular(1);
            $resultData = $result->isSuccess ? $result->data : [];
        }

        return Inertia::render('Discover/index', [
            'shows' => $resultData
        ]);
    }
}
