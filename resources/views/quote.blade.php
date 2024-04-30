<x-app-layout>
    <x-slot name="seo">
        <x-seo-meta :$meta />
    </x-slot>

    <div class="wrapper pt-24 lg:pt-20 space-y-4 grid md:grid-cols-2 gap-6">
        <div class="w-full relative">
            <x-contact.section />
        </div>
        <div class="w-full ">
            <div id="quote-form"></div>
        </div>
    </div>

</x-app-layout>
