<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class DashboardIndexController extends Controller
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Dashboard/Index', [
            'clients' => Cache::remember('client', 360, function () {
                return Client::simplePaginate(5);
            }),
        ]);
    }
}
