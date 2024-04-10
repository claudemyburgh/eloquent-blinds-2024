<?php

namespace App\Http\Controllers;

use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImageDestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($uuid): void
    {
        Media::findByUuid($uuid)->delete();
    }
}
