@php($title = "Tags")
@php($description = "Massive list of tags to explore")

<x-app-layout :$title :$description>
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $title }}" />
        <meta property="og:description"
              content="{{ $description }}" />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $title }}" />
        <meta name="twitter:description"
              content="{{ $description }}" />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        <div class="grid md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-900/10 md:dark:divide-gray-500/10">
            <div class="relative md:pr-6">
                <header class="md:sticky top-32">
                    <h1 class="heading-1 text-shadow-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        {{ $title }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        {{ $description }}
                    </p>

                </header>
            </div>
            <section class={`md:pl-6`}>
                @foreach($tags as $tag)
                    <a class="bg-tertiary-100 hover:bg-tertiary-200 text-xs border border-tertiary-500 text-tertiary-950 rounded inline-flex mr-1 px-2 py-.5" href="#">{{ $tag->name }}</a>
                @endforeach
            </section>
        </div>

    </div>

</x-app-layout>



