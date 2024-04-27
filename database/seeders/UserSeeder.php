<?php

    namespace Database\Seeders;

    use App\Models\User;
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\Hash;

    class UserSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         */
        public function run(): void
        {

            $claude = config('contact-details.users')['claude'];
            $xavier = config('contact-details.users')['xavier'];

            User::factory()->create([
                'name' => $claude['name'],
                'email' => $claude['name'],
                'password' => Hash::make($claude['password']),
            ]);

            User::factory()->create([
                'name' => $xavier['name'],
                'email' => $xavier['name'],
                'password' => Hash::make($xavier['password']),
            ]);


        }
    }
