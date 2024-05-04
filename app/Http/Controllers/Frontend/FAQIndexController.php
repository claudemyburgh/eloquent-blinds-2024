<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Services\Seo\Meta;
use Illuminate\View\View;

class FAQIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): View
    {
        $faqs = [
            [
                'id' => 1,
                'question' => 'Where are your company based?',
                'answer' => 'We are base in the beautifully area of the Western Cape in Kuilsriver, Cape Town',
            ],
            [
                'id' => 2,
                'question' => 'What kind of blinds do you have?',
                'answer' => 'We do indoor and outdoor blind. We also do aluminium, bamboo, basswood, honeycomb, roller, double roller, venetian, and zebra blinds.',
            ],
            [
                'id' => 3,
                'question' => 'Do you do Shutter?',
                'answer' => 'Yes we do a variety of shutters made from different materials and configurations.',
            ],
            [
                'id' => 4,
                'question' => 'Is the shutters a security fixture?',
                'answer' => 'Yes, we have a security shutter called ShutterGuard®',
            ],
            [
                'id' => 5,
                'question' => 'Do you do blind repair?',
                'answer' => 'Yes, we do repairs on variety of blind types.',
            ],
            [
                'id' => 6,
                'question' => 'Do you do blind blind automation?',
                'answer' => 'Yes, we do blind automation on most types of blinds.',
            ],
        ];

        return view('faqs', [
            'faqs' => $faqs,
            'meta' => Meta::render([
                'title' => 'Frequently asked questions',
                'description' => 'Questions. Frequently asked ones. Plus our answers. That\'s how FAQs work. If you can\'t find what you\'re looking for, you can always send us an email with your enquiry.',
            ]),
        ]);
    }
}
