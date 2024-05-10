<section {{ $attributes->merge(['class', 'grid grid-cols-3']) }}>
    <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 my-4">

        {{--        <x-google.reviews.stats :$reviews :$count :$ratingCount :$averageRating />--}}
        @foreach($reviews as $review)
            <x-google.reviews.card :$review />
        @endforeach
    </div>
</section>
