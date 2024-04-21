@if ($product->variants->count())
    <h3 class="heading-3 ">Variants</h3>
    <ul class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5" data-lightbox-gallery>
        @foreach($product->variants as $variant)
            <li>
                <a
                    data-pswp-width="600"
                    data-pswp-height="600"
                    data-cropped="true"
                    target="_blank"
                    href="{{ $variant->getFirstMediaUrl('default','screen') }}">
                    <figure>
                        <img loading="lazy" title="{{ $variant->name }}" width="106" height="106" class="rounded-global w-full aspect-square"
                             src="{{ $variant->getFirstMediaUrl('default','small') }}" alt="{{ $variant->name }}">
                        <figcaption class="truncate mr-1 text-xs py-1">{{ $variant->name }}</figcaption>
                    </figure>
                </a>
            </li>
        @endforeach
    </ul>
@endif
