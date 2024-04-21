<?php

namespace App\Http\Controllers\Api;

use App\Events\QuoteFormSubmitted;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuoteSendRequest;
use Illuminate\Http\JsonResponse;

class SendEmailController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(QuoteSendRequest $request): JsonResponse
    {
        event(new QuoteFormSubmitted($request->validated()));

        return response()->json(['success' => true]);
    }
}
