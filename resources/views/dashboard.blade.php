@extends('layouts.app2')

@section('navbar_dashboard')
    active
@endsection

@section('content')
{{--    <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>--}}
    <div class="container-fluid pt-4 px-5 pb-5">
        <div class="row">
            <div class="col mb-3">
                <h1>Your Dashboard, served.</h1>
            </div>

        </div>
        <!-- Row 1 -->
        <div class="row justify-content-center">
            <div class="col-lg-3 col-sm-10">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-user rounded-circle p-2" style="background-color: #2980b9; color: white"></i>
                        <span style="font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 14px">Pengguna Aktif</span>
                    </div>
                    <div class="card-body">
                        <h5 style="font-family: 'Raleway', sans-serif; font-weight: 300">...</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-10">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-cloud-upload-alt rounded-circle p-2" style="background-color: #c0392b; color: white"></i>
                        <span style="font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 14px">Jumlah Push Hari Ini</span>
                    </div>
                    <div class="card-body">
                        <h5 style="font-family: 'Raleway', sans-serif; font-weight: 300">...</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-10">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-laptop rounded-circle p-2" style="background-color: #8e44ad; color: white"></i>
                        <span style="font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 14px">IP Terakhir</span>
                    </div>
                    <div class="card-body">
                        <h5 style="font-family: 'Raleway', sans-serif; font-weight: 300">...</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-10">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-sign-in-alt rounded-circle p-2" style="background-color: #27ae60; color: white"></i>
                        <span style="font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 14px">Waktu Login Terakhir</span>
                    </div>
                    <div class="card-body">
                        <h5 style="font-family: 'Raleway', sans-serif; font-weight: 300">...</h5>
                    </div>
                </div>
            </div>
        </div>

        <!-- Row 2 -->
        <div class="row justify-content-center">
            <div class="col-lg-6 mb-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <canvas id="line-chart"></canvas>
                </div>
            </div>
            <div class="col-lg-6 mb-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <canvas id="doughnut-chart" width="800" height="450"></canvas>
                </div>
            </div>
        </div>

        <!-- Row 3 -->
        <div class="row justify-content-center">
            <div class="col-lg-6 mb-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <canvas id="bar-chart"></canvas>
                </div>
            </div>

            <div class="col-lg-6 mb-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <div class="row">
                        <div class="col">
                            <h5 style="font-family: 'Raleway', sans-serif; font-weight: 400">Your Devices</h5><hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Device Name</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>NodeMCU Lolin</td>
                                    <td><span class="badge badge-success">Online</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Arduino LoRa</td>
                                    <td><span class="badge badge-danger">Offline</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary btn-sm" onclick="location.href='...'">Selengkapnya</button>
                        </div>
                        <div class="col justify-content-end d-flex">
                            <small class="text-muted mr-2">Showing 4 from 11 devices</small>
                        </div>
                    </div>


                </div>
            </div>

        </div>

        <!-- Row 4 -->
        <div class="row justify-content-center" >
            <!-- Toggle Index -->
            <div class="col-lg-6 mb-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <div class="row">
                        <div class="col">
                            <h5 style="font-family: 'Raleway', sans-serif; font-weight: 400">Indeks tombol</h5><hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Toggle Name</th>
                                    <th scope="col">Created</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">...</th>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary btn-sm" onclick="location.href='...'">Selengkapnya</button>
                        </div>
                        <div class="col justify-content-end d-flex">
                            <small class="text-muted mr-2">Showing 4 from 11 toggles</small>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Listing Index -->
            <div class="col-lg-6 mb-3 px-3 col-sm-10">
                <div class="container p-3 bg-box">
                    <div class="row">
                        <div class="col">
                            <h5 style="font-family: 'Raleway', sans-serif; font-weight: 400">Indeks lis</h5><hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Listing Name</th>
                                    <th scope="col">Created</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">...</th>
                                    <td><a href="..."></a></td>
                                    <td>...</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary btn-sm" onclick="location.href='...'">Selengkapnya</button>
                        </div>
                        <div class="col justify-content-end d-flex">
                            <small class="text-muted mr-2">Showing 4 from 23 listings</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('footer_javascript')
    <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <script type="application/javascript">
        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                datasets: [{
                    data: [86,114,106,106,107,111,133,221,783,2478],
                    label: "Lis",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [282,350,411,502,635,809,947,1402,3700,5267],
                    label: "Tombol",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [168,170,178,190,203,276,408,547,675,734],
                    label: "Teks",
                    borderColor: "#3cba9f",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Grafik permintaan push'
                }
            }
        });

        new Chart(document.getElementById("doughnut-chart"), {
            type: 'doughnut',
            data: {
                labels: ["suhu", "kelembaban", "suhu rumah"],
                datasets: [
                    {
                        label: "Banyak data (buah)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Listing Data Ratio'
                }
            }
        });

        // Bar chart
        new Chart(document.getElementById("bar-chart"), {
            type: 'bar',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Frekuensi login pengguna'
                }
            }
        });
    </script>
@endsection
