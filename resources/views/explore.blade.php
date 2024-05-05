<x-app-layout>
    <x-slot name="seo">
        <x-seo-meta :$meta />
    </x-slot>
    <div class="wrapper pt-24 lg:pt-24 space-y-12">
        <div class="grid md:grid-cols-2 gap-6">
            <div class="relative ">
                <header class="md:sticky top-32">
                    <h1 class="heading-1 text-shadow-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        {{ $meta['title'] }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        {!! Str::clickable($meta['description']) !!}
                    </p>
                </header>
            </div>
            <x-facebook.card :$tag />
        </div>


    </div>
    <x-marquee.ticker class="my-12">
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

</x-app-layout>
