<mouse-spotlight class="p-4 md:p-6 row-span-2 space-y-4 rounded-lg dark:bg-gray-900 bg-gray-50 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800">

    <div class="lg:col-span-4">
        <img height="40" class="h-[40px]" src="{{ Vite::asset('resources/img/google-logo.svg') }}" alt="Google logo">
    </div>
    <div class="lg:col-span-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">Customer Reviews</h2>

        <div class="mt-3 flex items-center">
            <div>
                <div class="flex items-center">
                    <x-google.reviews.stars :rating="$averageRating" />
                </div>
                <p class="sr-only">{{$averageRating}} out of 5 stars</p>
            </div>
            <p class="ml-2 text-sm text-gray-800 dark:text-gray-100">Based on {{ $ratingCount }} reviews</p>
        </div>

        <div class="mt-6">
            <h3 class="sr-only">Review data</h3>

            <dl class="space-y-3">
                @for($star = 5; $star >= 1; $star--)
                    <div class="flex items-center text-sm">
                        <dt class="flex-1 flex items-center">
                            <p class="w-3 font-medium text-gray-800 dark:text-gray-100">{{$star}}<span class="sr-only"> star reviews</span></p>
                            <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                                <svg class="flex-shrink-0 h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <div class="ml-3 relative flex-1 overflow-hidden rounded-full">
                                    <div class="h-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-950 rounded-full"></div>
                                    <div style="width: {{ floatval(number_format(collect($reviews)->groupBy('rating')->map(fn($reviews) => $reviews->count())->get($star, 0)  / $averageRating * 100 , 1) )}}%"
                                         class="absolute inset-y-0 bg-amber-400 border border-amber-400 rounded-full -ml-0.5"></div>
                                </div>
                            </div>
                        </dt>
                        <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                            {{ floatval(number_format(collect($reviews)->groupBy('rating')->map(fn($reviews) => $reviews->count())->get($star, 0)  / $averageRating * 100 , 1) )}}%
                        </dd>
                    </div>
                @endfor
            </dl>
        </div>

        <div class="mt-10">
            <h3 class="text-lg font-medium  text-gray-800 dark:text-gray-100">Share your thoughts</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">If you’ve used this product, share your thoughts with other customers</p>
            <a target="_blank" href="https://g.page/r/CXWNSZcI_nGmEAI/review" class="mt-6 inline-flex w-full bg-white dark:bg-transparent border border-gray-300 dark:border-gray-200 rounded-md py-2 px-8 items-center justify-center text-sm font-medium
            text-gray-800 dark:text-gray-100
            hover:bg-gray-50 dark:hover:bg-gray-700 sm:w-auto
            lg:w-full">Write a review</a>
        </div>
    </div>

</mouse-spotlight>
