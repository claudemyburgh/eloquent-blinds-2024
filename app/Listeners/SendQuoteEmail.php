<?php

namespace App\Listeners;

use App\Events\QuoteFormSubmitted;
use App\Mail\Quote;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Mail;

class SendQuoteEmail
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

        Mail::to(config('mail.from.address'))
            ->cc(new Address(config('contact-details.users.xavier.email'), config('contact-details.users.xavier.name')))
            ->bcc(new Address(config('contact-details.users.claude.email'), config('contact-details.users.claude.name')))
            ->queue(new Quote($event->data));

        //            $user = Client::where('email', $event->data['email'])->first();
        //
        //            if (!$user) {
        //                $user = Client::create([
        //                    'first_name' => $event->data['first_name'],
        //                    'last_name' => $event->data['last_name'],
        //                    'email' => $event->data['email'],
        //                    'phone' => $event->data['phone'],
        //                ]);
        //            }

    }
}
