Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum, esse? Aperiam deleniti dolorum, enim fuga praesentium quisquam rerum. Harum molestias quia recusandae sequi totam! Ad adipisci alias, cupiditate deleniti esse eveniet facere nulla numquam, obcaecati officia omnis quae, quos reprehenderit unde ut veniam voluptas? Blanditiis consequuntur dolor eveniet iusto laudantium natus, neque nostrum porro veritatis voluptas! Animi cum dolorem doloremque doloribus eligendi fuga maiores modi nesciunt officia quam quidem sed tenetur totam, ut velit! Accusamus aliquam aliquid aspernatur assumenda atque debitis, earum eligendi impedit itaque magnam magni, molestias, neque nesciunt nobis officia omnis quibusdam quidem quis ratione reiciendis reprehenderit sequi sit tenetur veritatis vitae voluptatem voluptates. Adipisci dolor dolore ea eius impedit ipsum iste quia sequi vero voluptatum. Atque autem deserunt distinctio dolor doloribus facere in minus neque, nihil optio perspiciatis quo reiciendis rem ut voluptas? Adipisci consequatur corporis deleniti dolores libero? Accusamus aliquam amet beatae commodi consequatur, deleniti dolor doloremque doloribus eius et ex, excepturi explicabo facere facilis, id laudantium maiores minus nisi nostrum nulla odio odit praesentium quae quas repudiandae sapiente suscipit tempore vel velit voluptatum? Accusantium culpa, dolorem doloremque eum ex, expedita iste magnam perspiciatis praesentium provident quibusdam quisquam quo sunt. Corporis, cum enim illo magnam quibusdam quis! Ab alias asperiores assumenda at aut corporis dignissimos distinctio dolore earum expedita harum, id minima molestias non porro quaerat qui repellat repellendus rerum sunt tempore temporibus velit voluptates. Adipisci commodi consequatur dicta dolore labore nemo nobis nulla repellendus tempore temporibus. Accusantium adipisci alias aliquid amet asperiores aspernatur atque cum cupiditate, ea eos ex exercitationem fuga fugiat harum in inventore itaque iure minima minus molestias neque, nihil pariatur perferendis porro quas quos ratione, reiciendis rem repellendus sequi tenetur vel veniam voluptates? Ab accusantium dolore quis quisquam. Ab aliquam deserunt fugiat, iure magnam molestias repellendus reprehenderit sint. Inventore, quam quibusdam?
@if(collect(Request::segments())->contains('shutters'))
    <div {{ $attributes->merge(['class' => 'flex flex-col justify-center items-center']) }}>
        <h3 class="my-5 heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black relative">
            Shutters Comparison</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 ">
            @foreach($comparison as $comp)
                <a href="{{ route('products.show', ['shutters', $comp->link]) }}"
                   class="shadow-xl shadow-primary-500/20 flex rounded-global ">
                    <mouse-spotlight
                        class="relative border w-full flex flex-col border-primary-500/50 p-4 rounded-global transition-all hover:scale-105 bg-white dark:bg-gray-900">
                        <div aria-hidden="true"
                             class="absolute overflow-clip rounded-full w-1/2 -top-[2px] h-[4px] blur left-10 bg-gradient-to-r from-transparent via-primary-500 to-transparent">
                            <div
                                class="w-1/2 h-[20px] rounded-b-full absolute top-0 -translate-x-1/2 blur-md bg-secondary-500 "></div>
                        </div>
                        <header
                            class="font-bold tracking-tighter lg:h-1/4 items-end flex dark:text-gray-200 ">{{ $comp->name }}</header>
                        <ul class="list-disc list-inside space-y-2 my-2 py-2 border-y border-gray-200 dark:border-gray-800 text-sm">
                            @foreach($comp->details as $key =>  $details)
                                <li class="flex items-center">
                                    <svg @class([
                                'size-6 mr-2',
                                'text-gray-500 opacity-20' => !$details,
                                'text-primary-500 opacity-100' => $details,
                                ]) xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                    <span @class([
                                'dark:text-gray-200',
                                'opacity-20 line-through ' => !$details,
                                'opacity-100 ' => $details,
                                ])>
                                {{ $key }}
                            </span>
                                </li>
                            @endforeach
                        </ul>
                        <footer class="text-gray-400 dark:text-gray-500">
                            <p class="text-xs">Up to {{ $comp->warranty }} Years Warranty </p>
                            <p class="text-xs">{{ $comp->turn_around_time }}</p>
                        </footer>
                    </mouse-spotlight>
                </a>
            @endforeach
        </div>
    </div>

@endif
