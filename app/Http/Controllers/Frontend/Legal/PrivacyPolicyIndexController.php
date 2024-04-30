<?php

    namespace App\Http\Controllers\Frontend\Legal;

    use App\Http\Controllers\Controller;
    use App\Services\Seo\Meta;
    use Illuminate\Http\Request;

    class PrivacyPolicyIndexController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request)
        {
            return view('legal.privacy-policy', [
                'meta' => Meta::render([
                    'title' => 'Privacy Policy',
                    'description' => 'At Eloquent Blinds, accessible from https://eloquontblinds.co.za, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Eloquent Blinds and how we use it.'
                ])
            ]);
        }
    }
