@php($title = "Supplier and installer of Shutters and Blinds.")
@php($description = "We offer a wide range of high-quality shutters and blinds at affordable prices. Our shutters and blinds are perfect for any room in the house and will add style and function to your space.")

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
    <x-hero.index />

</x-app-layout>


