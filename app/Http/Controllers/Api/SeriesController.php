<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class SeriesController extends Controller
{
    public function getUpComing(): JsonResponse
    {
        return response()->json([]);
    }
}
