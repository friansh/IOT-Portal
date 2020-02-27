<?php

use Illuminate\Database\Seeder;

class TogglesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Toggle::class, 15)->create();
    }
}
