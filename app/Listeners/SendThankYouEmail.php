<?php

namespace App\Listeners;

use App\Events\QuoteFormSubmitted;

class SendThankYouEmail
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
        //
    }
}
