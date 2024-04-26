<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <x-partials.seo.google.tag-manager-head />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0284c7" />
    <link rel="canonical" href="{{ URL::current()}}" />
    <title>@isset($title)
            {{ $title }} |
        @endisset {{ config('app.name', 'Eloquent Blinds') }} </title>
    <meta name="description" content="{{ $description }}" />
    <x-partials.seo.favicon />
    <meta property="fb:app_id" content="{{ config('social.facebook.app_id') }}" />
    {{--  HTML Meta Tags--}}
    <meta property="og:url" content="{{  URL::current() }}" />
    <meta property="og:type" content="website" />
    {{--  Twitter Meta Tags --}}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="eloquentblinds.co.za" />
    <meta property="twitter:url" content="{{ URL::current() }}" />
    {{ $seo }}
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800,900&display=swap" rel="stylesheet" />
    @viteReactRefresh
    @vite(['resources/js/frontend/app.ts', 'resources/css/app.css'])
</head>
<body class="font-sans antialiased overflow-x-clip bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 accent-primary-300 md:accent-primary-500">
<x-partials.seo.google.tag-manager-body />
<x-partials.skip-to-main />
<x-pattern.grid class="h-1/3 " />
<x-navigation />

<main id="main" class="relative z-10 min-h-[20rem]">
    {{ $slot }}
</main>

<x-cta.blinds />
<x-marquee.ticker>
    @foreach($categories_with_all as $category)
        <a rel="preload" href="{{ route('categories.show', $category) }}" class="hover-underline splide__slide inline-block px-4 py-2 transition-colors hover:bg-primary-500/10 rounded-global shrink-0">
            {{$category->title}}
        </a>
        @if($category->products->count())
            @foreach($category->products as $product)
                <a rel="preload" href="{{ route('products.show', [$category, $product]) }}" class="hover-underline splide__slide inline-block px-4 py-2 transition-colors hover:bg-primary-500/10 rounded-global shrink-0">
                    {{$product->title}}
                </a>
            @endforeach
        @else
            @foreach($category->children as $child)
                <a rel="preload" href="{{ route('categories.show', $child) }}" class="hover-underline splide__slide inline-block px-4 py-2 transition-colors hover:bg-primary-500/10 rounded-global shrink-0">
                    {{$child->title}}
                </a>
                @foreach($child->products as $product)
                    <a rel="preload" href="{{ route('products.show', [$child, $product]) }}" class="hover-underline splide__slide inline-block px-4 py-2 transition-colors hover:bg-primary-500/10 rounded-global shrink-0">
                        {{$product->title}}
                    </a>
                @endforeach
            @endforeach
        @endif

    @endforeach

</x-marquee.ticker>
<div class="wrapper">
    <x-contact.section />
</div>

<x-footer />
<div aria-hidden="true" class="hidden" id="portal"></div>
<x-dialog.search />
</body>
</html>
