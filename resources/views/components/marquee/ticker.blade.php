<div {{ $attributes->merge(['class' => 'marquee-ticker splide bg-gray-100 dark:bg-gray-950 text-gray-700 overflow-hidden whitespace-nowrap dark:text-white h-16 border-y-2 md:border-y-[2px] border-primary-500 ']) }}>
    <div class="splide__track w-full py-2">
        <div class="splide__list">
            {{ $slot }}
        </div>
    </div>
</div>
