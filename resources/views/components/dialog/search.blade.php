<dialog {{ $attributes->merge(['id' => 'search-dialog', 'class' => 'max-w-xl max-h-[80%] w-full mt-2 md:mt-10 rounded-md border dark:border-gray-800 dark:bg-gray-900 border-gray-400 bd-gray-100 shadow-2xl shadow-black/50
backdrop:bg-gray-100/90 backdrop:dark:bg-gray-950/90
        backdrop:backdrop-blur overflow-hidden']) }}>
    <form id="search-form" class="bg-primary-500 sticky top-0 rounded-b-sm px-2 pt-4 pb-2">
        <label for="search-input" class="sr-only">Search</label>
        <input id="search-input" type="search" name="search" placeholder="Search" autocomplete="off" autofocus
               class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-600 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm
        disabled:opacity-50 disabled:cursor-no-drop w-full">
    </form>
    <div id="search-results" class="space-y-1 max-h-[400px] block overflow-y-auto text-shadow ">
    </div>
    <div class="bg-gray-300 sticky flex justify-between bottom-0 dark:bg-gray-900 px-4 py-2 border-t border-gray-400 dark:border-gray-800">
        <small class="text-gray-600 dark:text-gray-600">Search by <strong class="font-black ">category</strong> or <strong class="font-black ">product</strong> name</small>
        <ul aria-hidden="true" class="lg:flex text-gray-600 dark:text-gray-600 space-x-2 hidden ">
            <li class="flex items-center space-x-1 text-sm"><kbd class="DocSearch-Commands-Key">
                    <svg class="bg-gray-100 dark:bg-gray-950 rounded-sm" width="15" height="15" aria-label="Enter key" role="img">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                            <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
                        </g>
                    </svg>
                </kbd><span class="DocSearch-Label">to select</span></li>
            <li class="flex items-center space-x-1 text-sm"><kbd class="DocSearch-Commands-Key">
                    <svg class="bg-gray-100 dark:bg-gray-950 rounded-sm" width="15" height="15" aria-label="Arrow down" role="img">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                            <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                        </g>
                    </svg>
                </kbd><kbd class="DocSearch-Commands-Key">
                    <svg class="bg-gray-100 dark:bg-gray-950 rounded-sm" width="15" height="15" aria-label="Arrow up" role="img">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                            <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
                        </g>
                    </svg>
                </kbd><span class="DocSearch-Label">to navigate</span></li>
            <li class="flex items-center space-x-1 text-sm"><kbd class="DocSearch-Commands-Key">
                    <svg class="bg-gray-100 dark:bg-gray-950 rounded-sm" width="15" height="15" aria-label="Escape key" role="img">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                            <path
                                d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path>
                        </g>
                    </svg>
                </kbd><span class="DocSearch-Label">to close</span></li>
        </ul>
    </div>
</dialog>
