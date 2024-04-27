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


<main id="main" class="relative z-10 min-h-[20rem] max-w-xl mx-auto">
    {{ $slot }}
</main>

</body>
</html>
