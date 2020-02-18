@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <form action="{{ url('listing') }}" method="post">
                @csrf
                <div class="form-group">
                    <label for="name">Enter new listing name:</label>
                    <input type="text" class="form-control" name="name" id="name">
                </div>

                <div class="form-group">
                    <label for="description">What's this listing description?</label>
                    <input type="text" class="form-control" name="description" id="description">
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
@endsection
