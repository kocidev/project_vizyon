<?php

namespace App\Providers;

use GuzzleHttp\Client;

class StreamingAvailabilityService
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }
}
