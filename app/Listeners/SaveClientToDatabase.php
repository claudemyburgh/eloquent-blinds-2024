<?php

namespace App\Listeners;

use App\Events\QuoteFormSubmitted;
use App\Models\Client;
use Illuminate\Support\Facades\Session;

class SaveClientToDatabase
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(QuoteFormSubmitted $event): void
    {
        $client = Client::where('email', $event->data['email'])->first();
        if (! $client) {
            $client = Client::create($event->data);
        }

        Session::now('flash', 'Success');
    }
}
