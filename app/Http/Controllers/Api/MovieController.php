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

        $ttl = 86400; // 1 day
        $page = $request->query('page', 1);
        $cacheKey = 'now_playing_movies_page_' . $page;

        try {
            $response = Cache::remember($cacheKey, $ttl, function () use ($page) {
                $response = $this->tmdbService->getMovieNowPlaying($page);
                if (isset($response['results'])) {
                    Log::channel("tmdb")->info('Fetching:TMDbAPI:Movie:NowPlaying:Page:' . $page);
                    return $response['results'];
                } else {
                    Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:NowPlaying->Invalid response format');
                    throw new \RuntimeException('Invalid response format.');
                }
            });
            return response()->json($response);
        } catch (\Exception $e) {
            Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:NowPlaying-> ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to fetch data. Please try again later.'
            ], 500);
        }

        return response()->json($response);
    }

    public function getUpComing(Request $request): JsonResponse
    {
        $request->validate([
            'page' => 'nullable|integer|min:1',
        ]);

        $page = $request->query('page', 1);
        $cacheKey = 'upcoming_movies_page_' . $page;

        try {
            $response = Cache::remember($cacheKey, 86400, function () use ($page) {
                Log::channel("tmdb")->info('Fetching:TMDbAPI:Movie:UpComing:Page:' . $page);
                $response = $this->tmdbService->getMovieUpComing($page);
                if (isset($response['results'])) {
                    return $response['results'];
                } else {
                    Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:UpComing->Invalid response format');
                    throw new \RuntimeException('Invalid response format.');
                }
            });
            return response()->json($response);
        } catch (\Exception $e) {
            Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:UpComing-> ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to fetch data. Please try again later.'
            ], 500);
        }
    }

    public function getVideosByMovieId(int $movieId)
    {
        if (!is_numeric($movieId) || intval($movieId) != $movieId) {
            return response()->json(['error' => 'Invalid movie ID. It must be an integer.'], 400);
        }
        $ttl = 86400;
        $cacheKey = "movie_{$movieId}_videos";
        try {
            $response = Cache::remember($cacheKey, $ttl, function () use ($movieId) {
                Log::channel("tmdb")->info("Fetching:TMDbAPI:Movie:{$movieId}:Videos");
                $response = $this->tmdbService->getMovieVideosById($movieId);
                if (isset($response['results'])) {
                    return $response['results'];
                } else {
                    Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:UpComing->Invalid response format');
                    throw new \RuntimeException('Invalid response format.');
                }
            });
            return response()->json($response);
        } catch (\Exception $e) {
            Log::channel("tmdb")->error('Error:Fetching:TMDbAPI:Movie:getVideosByMovieId-> ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to fetch data. Please try again later.'
            ], 500);
        }
        return response()->json($response);
    }
}
