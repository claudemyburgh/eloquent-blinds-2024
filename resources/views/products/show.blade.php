<x-app-layout title="{{ $product->title }}"
              description="{{ $product->excerpt }}">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $product->title }}" />
        <meta property="og:description"
              content="{{ $product->excerpt }}" />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $product->title }}" />
        <meta name="twitter:description"
              content="" />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        products
    </div>
</x-app-layout>
