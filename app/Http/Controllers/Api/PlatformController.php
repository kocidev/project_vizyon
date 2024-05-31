<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PlatformController extends Controller
{
    public function getPlatformContent(string $platform): JsonResponse
    {
        $fakeData = [
            'amazon' => [
                [
                    'id' => 1,
                    'name' => 'Stranger Things',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Witcher',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Bird Box',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
            ],
            'netflix' => [
                [
                    'id' => 1,
                    'name' => 'Stranger Things',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Witcher',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Bird Box',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
            ],
            'disney' => [
                [
                    'id' => 1,
                    'name' => 'The Mandalorian',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'WandaVision',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Soul',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
            ],
            'apple' => [
                [
                    'id' => 1,
                    'name' => 'Ted Lasso',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Morning Show',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Greyhound',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://picsum.photos/300/180',
                    'type' => 'Series'
                ],
            ]
        ];

        $content = $fakeData[strtolower($platform)] ?? [];

        return response()->json($content);
    }
}
