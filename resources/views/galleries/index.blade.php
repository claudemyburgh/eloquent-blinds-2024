<x-app-layout>
    <x-slot name="seo">
        <x-seo-meta :$meta />
    </x-slot>
    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        <div class="grid md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-900/10 md:dark:divide-gray-500/10">
            <div class="relative md:pr-6">
                <header class="md:sticky top-32">
                    <h1 class="heading-1 text-shadow-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        {{ $meta['title'] }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        Take a little break and have a look around our gallery of shutters, blinds and everything
                        related.
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        See how our products can enhance your home or business with our wide range of superior shutter
                        and blinds.
                    </p>
                </header>
            </div>
            <section class={`md:pl-6`}>

            </section>
        </div>
        <div class="flex flex-wrap">
            @foreach($galleries as $gallery)
                <x-gallery.media :$gallery />
            @endforeach
        </div>
    </div>

</x-app-layout>



