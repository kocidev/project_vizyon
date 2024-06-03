<?php

namespace App\Providers;

use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class StreamingAvailabilityServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(Client::class, function () {
            return new Client([
                'base_uri' => config("services.streamingAvailability.base_uri"),
                'headers' => [
                    'X-RapidAPI-Host' => config("services.streamingAvailability.host"),
                    'X-RapidAPI-Key' => config("services.streamingAvailability.api_key"),
                ],
            ]);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
