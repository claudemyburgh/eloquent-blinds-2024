<div {{ $attributes->merge([]) }}>
    @if($model->galleries->count())
        <h3 class="heading-3 text-shadow-[5] text-shadow-primary-500/10 dark:text-shadow-black max-w-4xl text-balance">
            Here are {{ $model->galleries->count() }} {{ Str::plural(class_basename($model), $model->galleries->count()) }} for <span class="text-primary-500"> {{ $model->title }}</span> to have a look at.
        </h3>
        @foreach($model->galleries as $gallery)
            <x-galleries.media :$gallery />
        @endforeach
    @endif

</div>
