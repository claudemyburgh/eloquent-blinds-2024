<?php

    use App\Models\User;
    use function Pest\Laravel\actingAs;
    use function Pest\Laravel\get;

    it('has frontend routes', function ($url) {
        get($url)->assertOk();
    })->with('routes');

    it('has dashboard routes', function ($route) {
        actingAs(User::factory()->create());
        get(route($route))->assertOk();
    })->with('routes-dashboard');
