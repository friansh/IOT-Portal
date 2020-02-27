<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Toggle;
use Faker\Generator as Faker;

$factory->define(Toggle::class, function (Faker $faker) {
    return [
        'name' => str_replace(".", "", $faker->unique()->text(15)),
        'description' => $faker->text(50),
        'value' => 0,
        'author' => 1
    ];
});
