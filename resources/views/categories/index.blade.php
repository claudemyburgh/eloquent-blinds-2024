@php($title = "Categories")
@php($description = "Discover a world of stunning blinds as you explore our diverse product categories.")

<x-app-layout :$title :$description>
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $title }}" />
        <meta property="og:description"
              content="Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality." />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $title }}" />
        <meta name="twitter:description"
              content="Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality." />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>
    <section class="relative">
        <div class="wrapper py-24 lg:py-32 space-y-16">
            <div class="lg:flex">
                <div class="w-full pr-6">
                    <h1 class="col-span-12 heading-1 text-shadow-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        {{ $title }}
                    </h1>
                    <article class="prose prose-lg dark:prose-invert my-8">
                        <p>Discover a world of stunning blinds as you explore our diverse product categories. From
                            timeless classics to contemporary designs, our curated selection offers unparalleled style
                            and functionality.</p>
                    </article>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
                @foreach($categories as $category)
                    @if($category->products->count() || $category->children->count())
                        <header class="col-span-12">
                            <h3 class="heading-3"><a class="hover-underline" href="{{ route('categories.show', $category) }}">{{ $category->title }}</a></h3>
                        </header>
                        @if($category->products->count())
                            @foreach($category->products as $product)
                                <x-product.card class="col-span-6 md:col-span-4 lg:col-span-3" :$product
                                                route="{{ route('products.show', [$category, $product]) }}" />
                            @endforeach
                        @else
                            @foreach($category->children as $child)
                                <x-product.card class="col-span-6 md:col-span-4 lg:col-span-3" :product="$child"
                                                route="{{ route('categories.show', $category) }}" />
                            @endforeach
                        @endif
                    @endif
                @endforeach
            </div>
        </div>
    </section>
</x-app-layout>

