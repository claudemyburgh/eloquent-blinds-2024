<div class="w-[524px] max-w-full cursor-pointer overflow-clip rounded font-[Helvetica]">
    <div class="rounded-t border-[1px] border-b-0 border-[#dadde1] bg-cover bg-center bg-no-repeat">
        <div class="aspect-facebook relative w-full bg-primary-500">
            <img
                class="aspect-facebook relative flex w-full rounded-t object-contain"
                src="{{ $tag->getFirstMediaUrl('default', 'meta-tags') }}"
                alt="{{ $tag->title }}"
            />
        </div>
    </div>
    <div class="break-words border-[1px] border-[#dadde1] bg-[#f2f3f5] px-[12px] py-[10px] antialiased">
        <div class="overflow-hidden truncate whitespace-nowrap text-[12px] uppercase leading-[11px] text-[#606770]">eloquentblinds.co.za</div>
        <div class="block h-[46px] max-h-[46px] border-separate border-spacing-0 select-none overflow-hidden break-words text-left">
            <div class="mt-[3px] truncate pt-[2px] text-[16px] font-semibold leading-[20px] text-[#1d2129]">{{ config('app.name') }} | {{ $tag->title }}</div>
            <div class="mt-[3px] line-clamp-1 block h-[18px] max-h-[80px] border-separate	 border-spacing-0 select-none overflow-hidden truncate whitespace-nowrap break-words text-left text-[14px] leading-[20px] text-[#606770]">
                {{ $tag->description }}
            </div>
        </div>
    </div>
</div>
