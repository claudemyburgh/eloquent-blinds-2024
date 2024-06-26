<mouse-spotlight class=" ease-in-out p-4 md:p-6 group space-y-4 rounded-lg dark:bg-gray-900 bg-gray-50 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800">
    <div class="text-sm space-y-4 line-clamp-5">
        @markdown($review['text'] )
    </div>
    <div class="flex space-x-4 items-center">
        <a class="relative" href="{{ $review['author_url'] }}" target="_blank">
            <div class="border-[3px] group-hover:animate-spin-slow absolute -top-2 -left-2 h-14 w-14 border-t-[#008744] border-r-[#0057e7] border-b-[#d62d20] border-l-[#ffa700] rounded-full"></div>
            <img class="rounded-full h-10 w-10" src="{{ $review['profile_photo_url'] }}" alt="{{ $review['author_name'] }}">
        </a>

        <div class="flex flex-col">
            <a target="_blank" href="{{ $review['author_url'] }}" class="font-bold">
                {{ $review['author_name'] }}
            </a>
            <x-google.reviews.stars :rating="$review['rating']" />
        </div>
    </div>
</mouse-spotlight>


