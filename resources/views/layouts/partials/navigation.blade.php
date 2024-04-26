<nav class="fixed w-full z-20 top-0 lg:top-2">
    <headless-navigation class="block">
        <mouse-spotlight data-mouse-light="rgba(14, 165, 233, 0.10)"
                         class="wrapper relative mouse-light text-gray-500 dark:bg-gray-900/80 bg-gray-200/90 border border-gray-300 dark:border-primary-500/50 dark:text-gray-100 px-6 py-4 rounded-b-global md:rounded-global flex flex-wrap
            justify-between items-center shadow-2xl shadow-primary-500/50 backdrop-blur-sm ">
            <div aria-hidden="true"
                 class="absolute w-1/2 top-0 h-[2px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
                <div class="w-1/2 h-[15px] rounded-b-full absolute top-0 translate-x-1/2 blur bg-secondary-500/20 "></div>
            </div>
            <x-navigation.logo />
            <div class="flex items-center">
                <div class="lg:flex hidden space-x-8 font-bold items-center">
                    @foreach($links as $link)
                        @if($link->route !== 'categories.index')
                            <a @class([$link->classes])
                               href="{{ route($link->route) }}">{{ $link->name }}
                            </a>
                        @else
                            <x-navigation.desktop-dropdown :$link :$categories />
                        @endif
                    @endforeach
                </div>

                <x-navigation.search-button class="ml-4" />
                <x-navigation.theme-toggle />
                <x-navigation.mobile-toggle />
            </div>
            <div hidden id="mobile_close" class="w-full mt-4 lg:hidden space-y-4 font-bold items-center">
                @foreach($links as $link)
                    @if($link->route !== 'categories.index')
                        <a
                            @class([$link->classes, 'flex' ]) href="{{ route($link->route) }}">{{ $link->name }}
                        </a>
                    @else
                        <x-navigation.mobile-dropdown :$link :$categories />
                    @endif
                @endforeach
            </div>
        </mouse-spotlight>
    </headless-navigation>
</nav>
