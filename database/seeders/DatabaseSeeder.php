<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Claude Myburgh',
            'email' => 'claude@eloquentblinds.co.za',
            'password' => Hash::make('password'),
        ]);

        User::factory(10)->create();

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}
