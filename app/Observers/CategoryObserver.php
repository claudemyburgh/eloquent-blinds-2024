<?php

    namespace App\Observers;

    use Illuminate\Support\Facades\Cache;
    use Illuminate\Support\Facades\Log;

    class CategoryObserver
    {

        public function created(): void
        {
            Cache::flush();
            Log::info('created');
        }

        public function updating(): void
        {
            Cache::flush();
            Log::info('updated');
        }

        public function deleted(): void
        {
            Cache::flush();
            Log::info('deleted');
        }

        public function restored(): void
        {
            Cache::flush();
        }

        public function forceDeleted(): void
        {
            Cache::flush();
        }


    }
