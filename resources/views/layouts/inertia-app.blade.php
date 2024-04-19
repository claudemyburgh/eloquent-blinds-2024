<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/dashboard-app.tsx', "resources/js/dashboard/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased overflow-x-hidden bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 accent-primary-300 md:accent-primary-500">
@inertia
</body>
</html>
