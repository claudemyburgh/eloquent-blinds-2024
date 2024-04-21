<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\Component;
use Spatie\Menu\Link;
use Spatie\Menu\Menu;

class Footer extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {

        $categories_menu = Menu::build(collect(Cache::get('categories_list'))->toArray(), function ($menu, $category) {
            $menu->link(route('categories.show', $category['slug']), $category['title']);
        })
            ->each(function (Link $link) {
                $link->addClass('hover-underline text-gray-400 dark:text-white/50');
            })
            ->setAttribute('role', 'navigation')->addClass('mt-4 space-y-3')
            ->prepend('<h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Product Categories</h3>');

        $friends_menu = Menu::new()
            ->setAttribute('role', 'navigation')->addClass('mt-4 space-y-3')
            ->prepend('<h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Friend\'s of us</h3>')
            ->add(Link::to('https://designbycode.co.za', 'DesignByCode'))
            ->each(function (Link $link) {
                $link->addClass('hover-underline text-gray-400 dark:text-white/50')
                    ->setAttribute('target', '_blank');
            });

        $legal_menu = Menu::new()
            ->setAttribute('role', 'navigation')->addClass('mt-4 space-y-3')
            ->prepend('<h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Legal Stuff</h3>')
            ->add(Link::to(route('legal.privacy-policy'), 'Privacy Policy'))
            ->add(Link::to(route('legal.warrants'), 'Warrants'))
            ->each(function (Link $link) {
                $link->addClass('hover-underline text-gray-400 dark:text-white/50');
            });

        $social_menu = Menu::build(config('social-media.links'), function ($menu, $social) {
            $menu->link($social['url'], $social['raw']);
        })->each(function (Link $link) {
            $link->addClass('hover-underline text-gray-400 dark:text-white/50 flex items-center space-x-2 ')
                ->setAttribute('target', '_blank');
        })->prepend('<h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Social Media</h3>')
            ->setAttribute('role', 'navigation')->addClass('mt-4 space-y-3');

        return view('layouts.partials.footer', [
            'categories_menu' => $categories_menu,
            'friends_menu' => $friends_menu,
            'legal_menu' => $legal_menu,
            'social_menu' => $social_menu,
        ]);
    }
}
