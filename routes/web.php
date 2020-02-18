<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;

Route::get('/', function () {return view('welcome'); });
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/dashboard', 'DashboardController@index');
Route::get('/belajarchart/{id?}', 'HomeController@belajarChart');
Route::view('/react', 'react');
Route::view('/toggle', 'toggle');
Route::resource('listing', 'ListingController');

Auth::routes();
