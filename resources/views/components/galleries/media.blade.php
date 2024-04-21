<div class="my-12 relative bg-gray-100 dark:bg-gray-800 rounded-global shadow-lg ">
        <span
            class="rounded-full absolute inline-flex bg-gray-100 dark:bg-gray-800 font-semibold px-6 py-2 text-xl -top-[20px] left-6">
            {{ $gallery->title }}
        </span>
    <div data-lightbox-gallery
         class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative z-10 gap-6 p-6">
        @foreach($gallery->media as $media)
            <a href="{{ $media->getFullUrl('screen') }}"
               class="rounded-global aspect-square bg-gray-300 dark:bg-gray-900 block"
               data-pswp-width="1600"
               data-pswp-height="1200"
               data-cropped="true"
               target="_blank"
            >
                <img height="150" width="200" loading="lazy"
                     class="size-full rounded-global object-cover hover:scale-105 transition-transform"
                     src="{{ $media->getFullUrl('card') }}"
                     alt="{{ $gallery->title }}">
            </a>
        @endforeach
    </div>
</div>
