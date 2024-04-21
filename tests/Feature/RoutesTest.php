<?php

use App\Models\Category;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('has frontend routes', function ($route) {
    if ($route === 'categories.show') {
        $cat = Category::factory()->create([
            'title' => 'Shutter',
            'slug' => 'shutter',
        ]);
        get(route($route, 'shutter'))->assertOk();
    } else {
        get(route($route))->assertOk();
    }

})->with('routes');

it('has dashboard routes', function ($route) {
    $user = User::factory()->create();
    actingAs($user);
    get(route($route))->assertOk();
})->with('routes-dashboard');
