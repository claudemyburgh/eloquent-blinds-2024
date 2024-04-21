<?php

namespace App\Listeners;

use App\Events\QuoteFormSubmitted;
use App\Mail\QuoteThanks;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Mail;

class SendThankYouEmail implements ShouldQueue
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
        Mail::to(new Address($event->data['email'], $event->data['first_name'].' '.$event->data['last_name']))
            ->queue(new QuoteThanks($event->data));
    }
}
