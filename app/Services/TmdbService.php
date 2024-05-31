<?php

namespace App\Services;

use GuzzleHttp\Client;

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
    public function getMovieNowPlaying(int $page)
    {
        $response = $this->client->get('movie/now_playing', [
            'query' => [
                'page' => $page,
                'language' => 'tr',
                'region' => 'tr',
            ],
        ]);

        return json_decode($response->getBody(), true);
    }
}
