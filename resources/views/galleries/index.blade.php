@php($title = "Gallery")
@php($description = "Look through our awesome gallery")

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
                        Take a little break and have a look around our gallery of shutters, blinds and everything
                        related.
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        See how our products can enhance your home or business with our wide range of superior shutter
                        and blinds.
                    </p>
                </header>
            </div>
            <section class={`md:pl-6`}>

            </section>
        </div>
        <div class="flex flex-wrap">
            @foreach($galleries as $gallery)
                <x-gallery.media :$gallery />
            @endforeach
        </div>
    </div>

</x-app-layout>



