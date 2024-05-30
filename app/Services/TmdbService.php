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
     * Get a list of movies that are currently in theatres.
     */
    public function getMovieNowPlaying()
    {
        $response = $this->client->get('movie/now_playing', [
            'query' => [
                'page' => 1,
                'language' => 'tr',
                'region' => 'tr',
            ],
        ]);

        return json_decode($response->getBody(), true);
    }
}
