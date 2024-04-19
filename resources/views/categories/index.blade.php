<x-app-layout>

    <div class="wrapper my-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 p-0">
        @foreach($categories as $category)
            <div class="bg-gray-100 first:col-span-2 first:row-span-2 dark:bg-gray-800 border aspect-square rounded border-gray-200 dark:border-gray-800 ">
                <h4>{{ $category->title }}</h4>
            </div>
        @endforeach
    </div>
    <x-shutters-comparison />


</x-app-layout>
