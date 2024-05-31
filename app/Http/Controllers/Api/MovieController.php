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
                Log::channel("tmdb")->info('Fetching data from TMDb API for page: ' . $page);
                return $this->tmdbService->getMovieNowPlaying($page);
            });
        } catch (\Exception $e) {
            Log::channel("tmdb")->error('Error fetching data from TMDb API: ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to fetch data. Please try again later.'
            ], 500);
        }

        return response()->json($response);
    }
}
