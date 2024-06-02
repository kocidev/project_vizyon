<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TmdbService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class MovieController extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }

    public function getTheaters(Request $request): JsonResponse
    {
        $request->validate([
            'page' => 'nullable|integer|min:1',
        ]);
        $page = $request->query('page', 1);

        $result = $this->tmdbService->getMovieNowPlaying($page);
        if ($result->isSuccess) {
            return response()->json($result->data);
        } else {
            return response()->json(['error' => $result->error], 500);
        }
    }

    public function getUpComing(Request $request): JsonResponse
    {
        $request->validate([
            'page' => 'nullable|integer|min:1',
        ]);
        $page = $request->query('page', 1);

        $result = $this->tmdbService->getMovieUpComing($page);
        if ($result->isSuccess) {
            return response()->json($result->data);
        } else {
            return response()->json(['error' => $result->error], 500);
        }
    }

    public function getVideosByMovieId(int $movieId)
    {
        if (!is_numeric($movieId) || intval($movieId) != $movieId) {
            return response()->json(['error' => 'Invalid movie ID. It must be an integer.'], 400);
        }
        $result = $this->tmdbService->getMovieVideosById($movieId);
        if ($result->isSuccess) {
            return response()->json($result->data);
        } else {
            return response()->json(['error' => $result->error], 500);
        }
    }
}
