<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Listing;
use Faker\Generator as Faker;

$factory->define(Listing::class, function (Faker $faker) {
    return [
        'name' => str_replace(".", "", $faker->unique()->text(15)),
        'description' => $faker->text(50),
        'author' => 1
    ];
});
