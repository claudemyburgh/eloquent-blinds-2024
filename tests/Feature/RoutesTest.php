<?php

use App\Models\Category;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('has frontend routes', function ($route) {
    $cat = Category::factory()->create([
        'title' => 'Shutter',
        'slug' => 'shutter',
    ]);

    if ($route === 'categories.show') {
        get(route($route, $cat))->assertOk();
    } else {
        get(route($route))->assertOk();
    }

})->with('routes');

it('has dashboard routes', function ($route) {
    $user = User::factory()->create();
    actingAs($user);
    get(route($route))->assertOk();
})->with('routes-dashboard');
