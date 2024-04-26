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
    <div id="learn-more" class="wrapper  md:grid mt-24 md:mt-32 grid-cols-12 gap-8 text-gray-500 dark:text-gray-300">
        <div class="md:col-span-12 mb-6 lg:col-span-6 relative">
            <div class="max-w-full sticky top-32">
                <mouse-spotlight
                    class=" block  shadow-xl shadow-primary-500/10 rounded-lg p-6 border border-primary-500/20">
                    <div aria-hidden="true"
                         class="absolute w-[1px] h-2/3  left-0 top-0 bg-gradient-to-b from-transparent via-secondary-500 to-transparent">
                        <div
                            class="w-[80px] h-full rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 blur-md bg-secondary-500/10"></div>
                    </div>
                    <h2 class="heading-3 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black mt-6">
                        What we can do for you</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        Discover our expansive collection of premium blinds, meticulously crafted to offer exceptional
                        quality at affordable prices. Whether you're sprucing up a living room, bedroom, or any other
                        space in your home, our
                        blinds
                        seamlessly blend style and functionality, elevating your decor to new heights.
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        With a wide range of options available, including
                        Aluminium, Bamboo, Basswood, Honeycomb, Roller, Venetian, and Zebra Blinds, you can effortlessly
                        find the perfect choice to suit your taste and
                        enhance your living space.
                    </p>
                </mouse-spotlight>
            </div>
        </div>
        <div class="md:col-span-12 lg:col-span-6">
            <div class="grid grid-cols-2 gap-6">
                @foreach($products as $product)
                    <x-product.card class="col-span-1" :product="$product"
                                    route="{{ route('products.show', [$product->category,$product]) }}" />
                @endforeach
            </div>
        </div>
    </div>

</x-app-layout>


