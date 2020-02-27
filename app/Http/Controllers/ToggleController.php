<?php

namespace App\Http\Controllers;

use App\Toggle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ToggleController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Toggle::where('author', Auth::id())->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $toggle = new Toggle();
        $toggle->name = $request->name;
        $toggle->description = $request->description;
        $toggle->author = Auth::id();
        $toggle->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Toggle  $toggle
     * @return \Illuminate\Http\Response
     */
    public function show(Toggle $toggle)
    {
        return $toggle;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Toggle  $toggle
     * @return \Illuminate\Http\Response
     */
    public function edit(Toggle $toggle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Toggle  $toggle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Toggle $toggle)
    {
        $toggle->name = $request->name;
        $toggle->description = $request->description;
        $toggle->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Toggle  $toggle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Toggle $toggle)
    {
        $toggle->delete();
    }
}
