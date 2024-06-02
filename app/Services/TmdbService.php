<?php

namespace App\Services;

use App\Utils\Result;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class TmdbService
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * Get a list of movies that are currently in theaters.
     */
    public function getMovieNowPlaying(int $page = 1): Result
    {
        $cacheKey = "now_playing_movies_page_{$page}";

        $now = Carbon::now();
        $midnight = Carbon::tomorrow();
        $ttl = $now->diffInSeconds($midnight);

        return Cache::remember($cacheKey, $ttl, function () use ($page) {
            try {
                $response = $this->client->get('movie/now_playing', [
                    'query' => [
                        'page' => $page,
                        'language' => 'tr',
                        'region' => 'tr',
                    ]
                ]);

                if ($response->getStatusCode() !== 200) {
                    Log::channel("tmdb")->error("Error fetching data from TMDB Service 'now_playing' page:{$page}");
                    return Result::failure('Error fetching data from TMDB');
                }

                $data = json_decode($response->getBody()->getContents(), true);

                return Result::success($data['results']);
            } catch (\Exception $e) {
                Log::channel("tmdb")->error("Exception occurred: " . $e->getMessage());
                return Result::failure('Error fetching data from TMDB');
            }
        });
    }

    /**
     * Get a list of movies that are being released soon.
     */
    public function getMovieUpComing(int $page)
    {
        $response = $this->client->get('movie/upcoming', [
            'query' => [
                'page' => $page,
                'language' => 'tr',
                'region' => 'tr',
            ],
        ]);

        return json_decode($response->getBody(), true);
    }

    /**
     * Get movie videos by movie id.
     */
    public function getMovieVideosById(int $movideId)
    {
        $response = $this->client->get("movie/{$movideId}/videos", [
            'query' => [
                'language' => 'tr',
            ],
        ]);

        return json_decode($response->getBody(), true);
    }
}
