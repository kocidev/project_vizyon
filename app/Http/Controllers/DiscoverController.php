<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DiscoverController extends Controller
{
    function show(Request $request): Response
    {
        $request->validate([
            's' => 'nullable|min:3',
        ]);
        $s = $request->getQueryString();

        $result = [];
        return Inertia::render('Discover/index', [
            'shows' => $result
        ]);
    }
}
