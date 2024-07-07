<?php

    namespace App\Http\Controllers\Dashboard;

    use App\Http\Controllers\Controller;
    use App\Models\Client;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;
    use Inertia\Inertia;
    use Inertia\Response;
    use Spatie\Tags\Tag;

    class DashboardIndexController extends Controller
    {
        public function __invoke(Request $request): Response
        {
            return Inertia::render('Dashboard/Index', [
                'tags' => Tag::get(),
                'clients' => Cache::remember('client', 60, function () {
                    return Client::orderBy('id', 'desc')->simplePaginate(10);
                }),
            ]);
        }
    }
