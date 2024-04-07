<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <meta name="test" content="test" >
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


        @viteReactRefresh
        @vite(['resources/js/frontend/app.ts', 'resources/css/app.css'])

    </head>
    <body class="font-sans antialiased bg-gray-300 text-gray-800 dark:bg-gray-950 dark:text-gray-200">
       {{ $slot }}
    </body>
</html>