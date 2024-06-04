<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TmdbService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TrendingControllerr extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }

    public function getTrending(string $type, string $window, Request $request): JsonResponse
    {
        $request->validate([
            'page' => 'nullable|integer|min:1|max:50',
        ]);
        $page = $request->query('page', 1);

        $result = $this->tmdbService->getTrending($type, $window, $page);
        if ($result->isSuccess) {
            return response()->json($result->data);
        } else {
            return response()->json(['error' => $result->error], 500);
        }
    }
}
