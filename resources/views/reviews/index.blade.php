<x-app-layout>
    <x-slot name="seo">
        <x-seo-meta :$meta />
    </x-slot>
    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        <x-google.reviews.container :$data />
    </div>
</x-app-layout>
