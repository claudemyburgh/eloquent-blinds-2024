<?php

namespace App\Listeners;

use App\Events\QuoteFormSubmitted;
use App\Models\Client;

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

        $client = Client::firstOrCreate($event->data);
    }
}
