<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'uuid' => Str::uuid(),
                'title' => 'Vertical Blinds',
                'excerpt' => 'The vertical blinds are perfect for a variety of applications.',
                'body' => 'Vertical blinds are perfect for a variety of applications. They are ideal for use in living rooms, kitchens, kitchens, etc.',
            ],
            [
                'uuid' => Str::uuid(),
                'title' => 'Horizontal Blinds',
                'excerpt' => 'The horizontal blinds are perfect for a variety of applications.',
                'body' => 'Horizontal blinds are perfect for a variety of applications. They are ideal for use in living rooms, kitchens, kitchens, etc.',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
