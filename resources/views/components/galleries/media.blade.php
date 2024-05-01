<div class="my-12 relative border border-primary-500/30 bg-gray-100 dark:bg-gray-900 shadow-primary-500/10 rounded-global shadow-lg isolate p-6">
    <div aria-hidden="true"
         class="absolute w-1/2 top-0 h-[2px] rounded-b-full left-1/3 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
        <div
            class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
    </div>
    <h3 class="heading-3 mb-4 capitalize">{{ $gallery->title }}</h3>
    <div data-lightbox-gallery
         class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative gap-6 ">
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
