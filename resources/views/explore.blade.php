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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            @foreach($categories as $category)
                <div class="space-y-4">
                    <h4 class="heading-4">{{$category->title}}</h4>
                    <ul class="list-disc list-inside space-y-2">
                        @if($category->products->count())
                            @foreach($category->products as $product)
                                <li><a class="hover-underline text-primary-500" href="{{ route('products.show', [$category, $product]) }}">{{ $product->title }}</a></li>
                            @endforeach
                        @elseif($category->children->count())
                            @foreach($category->children as $child)
                                <li class="space-y-2">
                                    <a class="hover-underline text-primary-500" href="{{ route('categories.show', [$category]) }}">{{ $child->title }}</a>
                                    @if ($child->products->count())
                                        <ul class="list-disc list-inside ml-4 space-y-2">
                                            @foreach($child->products as $product)
                                                <li><a class="hover-underline text-primary-500" href="{{ route('products.show', [$child, $product]) }}">{{ $product->title }}</a></li>
                                            @endforeach
                                        </ul>
                                    @endif
                                </li>
                            @endforeach
                        @endif
                    </ul>
                </div>
            @endforeach


        </div>
    </div>


</x-app-layout>
