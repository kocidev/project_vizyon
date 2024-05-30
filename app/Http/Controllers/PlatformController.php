<?php

namespace App\Http\Controllers;

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
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Witcher',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Bird Box',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
            ],
            'netflix' => [
                [
                    'id' => 1,
                    'name' => 'Stranger Things',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Witcher',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Bird Box',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
            ],
            'disney' => [
                [
                    'id' => 1,
                    'name' => 'The Mandalorian',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'WandaVision',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Soul',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
            ],
            'apple' => [
                [
                    'id' => 1,
                    'name' => 'Ted Lasso',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 2,
                    'name' => 'The Morning Show',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
                [
                    'id' => 3,
                    'name' => 'Greyhound',
                    'description' => 'Lorem ipsum sipsum.',
                    'image' => 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg',
                    'type' => 'Series'
                ],
            ]
        ];

        $content = $fakeData[strtolower($platform)] ?? [];

        return response()->json($content);
    }
}
