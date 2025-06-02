<?php
namespace Database\Seeders;

use App\Models\Todo;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{

    public function run(): void
    {
           Todo::factory()
            ->count(10)
            ->sequence(
                ['is_completed' => true],
                ['is_completed' => false]
            )
            ->create();

        // $todos = [
        //     "title"        => Factory::create()->sentence(),
        //     "description"  => Factory::create()->sentence(),
        //     'due_date'     => Factory::create()->date(),
        //     'is_completed' => Factory::create()->boolean(),
        // ];

        // for ($i = 0; $i < 10; $i++) {
        //     Todo::create($todos);
        // }
    }
}
