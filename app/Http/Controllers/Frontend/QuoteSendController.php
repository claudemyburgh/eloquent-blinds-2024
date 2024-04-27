<?php

namespace App\Http\Controllers\Frontend;

use App\Events\QuoteFormSubmitted;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuoteSendRequest;

class QuoteSendController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(QuoteSendRequest $request)
    {
        event(new QuoteFormSubmitted($request->validated()));

        return back()->withStatus('Quote send to Eloquent Blinds team');
    }
}
