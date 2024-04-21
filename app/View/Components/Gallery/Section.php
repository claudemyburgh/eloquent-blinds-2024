<?php

namespace App\View\Components\Gallery;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Section extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(public $model)
    {

    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.galleries.section');
    }
}
