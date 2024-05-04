<?php

namespace Database\Factories;

use App\Models\MetaTat;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<MetaTat>
 */
class MetaTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title,
            'description' => fake()->paragraph(rand(3, 6)),
            //                'link' => fake()->url()
        ];
    }
}
