<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use GuzzleHttp\Client;

class TmdbServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Client::class, function () {
            return new Client([
                'base_uri' => config("services.tmdb.base_uri"),
                'headers' => [
                    'Authorization' => 'Bearer' . ' ' . config("services.tmdb.access_key"),
                    'accept' => 'application/json',
                ],
            ]);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
