@php($title= "Free Online Quote")
@php($description= "Feel free to request a Free online quote")

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
    <div class="wrapper pt-24 lg:pt-20 space-y-4 grid md:grid-cols-2 gap-6">
        <div class="w-full relative">
            <x-contact.section />
        </div>
        <div class="w-full ">
            {{--            <x-contact.form />--}}
            <div id="quote-form"></div>
        </div>
    </div>

</x-app-layout>
