<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class SeriesController extends Controller
{
    public function getUpComing(): JsonResponse
    {
        return response()->json([
            [
                "name" => "Gelecek Yeni Dizi #1",
                "meta" => [
                    "season" => 1,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #2",
                "meta" => [
                    "season" => 2,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #3",
                "meta" => [
                    "season" => 3,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #4",
                "meta" => [
                    "season" => 4,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #5",
                "meta" => [
                    "season" => 5,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #1",
                "meta" => [
                    "season" => 1,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #2",
                "meta" => [
                    "season" => 2,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #3",
                "meta" => [
                    "season" => 3,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #4",
                "meta" => [
                    "season" => 4,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
            [
                "name" => "Gelecek Yeni Dizi #5",
                "meta" => [
                    "season" => 5,
                    "link" => "xhL5ihOUUcs",
                    "image" => "assets/images/series/doctor-who_thumb.jpg",
                ],
            ],
        ]);
    }
}
