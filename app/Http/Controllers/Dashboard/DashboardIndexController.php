<?php

    namespace App\Http\Controllers\Dashboard;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Inertia\Response;

    class DashboardIndexController extends Controller
    {

        /**
         * @param Request $request
         * @return Response
         */
        public function __invoke(Request $request): Response
        {
            return Inertia::render('Dashboard/Index');
        }
    }
