<x-app-layout :title="$product->title"
              :description="$product->excerpt">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $product->title }}" />
        <meta property="og:description"
              content="{{ $product->excerpt }}" />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $product->title }}" />
        <meta name="twitter:description"
              content="{{ $product->excerpt }}" />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <section class="space-y-16 py-16 lg:py-32 z-10 wrapper">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 dark:border-gray-800 relative">
            <div class="relative">
                <div class="md:sticky md:top-32  space-y-6">
                    <x-product.media :$product />
                    <x-product.variants :$product />
                </div>
            </div>
            <div>
                <x-product.details :$product />
          
                <div id="quote-form" data-product="{{ $product->title }}"></div>
            </div>


        </div>
        <x-shutters-comparison />
        <x-gallery.section :model="$product" />
    </section>


</x-app-layout>
