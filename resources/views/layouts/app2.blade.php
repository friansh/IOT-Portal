<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/user.css') }}" rel="stylesheet">

    <style>
        @yield('custom_css')
    </style>

</head>
<body class="d-flex flex-column">
<div id="page-content">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="<?= asset('img/navbar.png') ?>" height="35px" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto d-flex d-lg-none">
                        @auth
                            <a class="nav-item nav-link @yield('navbar_home')" href="{{ url('home') }}">Beranda</a>
                            <a class="nav-item nav-link @yield('navbar_dashboard')" href="{{ url('dashboard') }}">Dasbor</a>
                            <a class="nav-item nav-link @yield('navbar_listings')" href="{{ url('listing/index') }}">Listing</a>
                            <a class="nav-item nav-link @yield('navbar_toggles')" href="{{ url('toggle/index') }}">Toggle</a>
                        @endauth
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <i class="fab fa-adobe"></i> {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main>
            <div class="d-flex" id="wrapper">
                @auth
                    <!-- Sidebar -->
                    <div class="bg-light border-right d-lg-block" id="sidebar-wrapper">
                        <div class="sidebar-heading text-center my-3">friansh IDCARE</div>
                        <div class="list-group list-group-flush">
                            <a href="{{ url('dashboard') }}" class="list-group-item list-group-item-action bg-light">Dashboard</a>
                            <a href="{{ url('listing') }}" class="list-group-item list-group-item-action bg-light">Listings</a>
                            <a href="{{ url('toggles') }}" class="list-group-item list-group-item-action bg-light">Toggles</a>
                        </div>
                    </div>
                    <!-- /#sidebar-wrapper -->
                @endauth
                <!-- Page Content -->
                <div id="page-content-wrapper">
                    @yield('content')
                </div>
            </div>
        </main>
    </div>
</div>

    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
            <small>Copyright 2019 &copy; Fikri Rida Pebriansyah</small>
        </div>
    </footer>

@yield('footer_javascript')

</body>
</html>
<script type="application/javascript">
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
</script>
