<?php

namespace App\Http\Controllers;

class SeriesController extends Controller
{
    public function getUpComing()
    {
        return response()->json([
            [
                "name" => "Test",
                "meta" => [
                    "season" => 1,
                    "link" => "xx",
                    "image" => "xx",
                ],
            ]
        ]);
    }
}
