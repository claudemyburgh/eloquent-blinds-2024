<?php

declare(strict_types=1);

namespace App\Traits;

use App\Exceptions\ObserverException;
use Illuminate\Support\Facades\Log;

trait Observable
{
    public static function bootObservable(): void
    {
        $observer = '\\App\\Observers\\'.class_basename(get_called_class()).'Observer';

        try {
            (new static)->registerObserver($observer);
        } catch (ObserverException $e) {
            Log::alert($e->getMessage());
        }

    }
}
