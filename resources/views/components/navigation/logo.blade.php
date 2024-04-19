<a href="{{ config('app.url') }}" class="flex shrink-0 md:ml-0 origin-left md:scale-125">
    <span class="sr-only">{{ config('app.name') }}</span>
    <img height="35" width="180" aria-hidden="true"
         src="{{ Vite::asset('resources/img/brand/light-long-logo.svg') }}" class="h-8 md:ml-0 hidden dark:block"
         alt="{{ config('app.name') }}">
    <img height="35" width="180" aria-hidden="true"
         src="{{ Vite::asset('resources/img/brand/dark-long-logo.svg') }}"
         class="h-8 md:ml-0 dark:hidden block" alt="{{ config('app.name') }}">
</a>
