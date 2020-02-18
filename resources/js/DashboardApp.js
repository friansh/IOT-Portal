import React from 'react';
import ReactDOM from 'react-dom'
import {SmallCard, DataCard, ChartCard} from './components/Card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "react-bootstrap";

library.add(faUser);

class DashboardApp extends React.Component {
    render(){
        return(
            <Container className="pt-4 px-5 pb-5">
                <Row className="justify-content-center">
                    <Col lg="3" sm="10" className="mb-3">
                        <SmallCard title="Pengguna Aktif" content="..." icon="user"/>
                    </Col>
                    <Col lg="3" sm="10" className="mb-3">
                        <SmallCard title="Jumlah Push Hari Ini" content="..." icon="user"/>
                    </Col>
                    <Col lg="3" sm="10" className="mb-3">
                        <SmallCard title="IP Terakhir" content="..." icon="user"/>
                    </Col>
                    <Col lg="3" sm="10" className="mb-3">
                        <SmallCard title="Waktu Login Terakhir" content="..." icon="user"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="6" sm="10" className="mb-3">
                        <ChartCard title="waduh" type="line"/>
                    </Col>
                    <Col lg="6" sm="10" className="mb-3">
                        <ChartCard title="aweu!!" type="doughnut"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="6" sm="10" className="mb-3">
                        <DataCard title="Tabel ke zatuu" />
                    </Col>
                    <Col lg="6" sm="10" className="mb-3">
                        <DataCard title="tabel ke duaw"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="6" sm="10" className="mb-3">
                        <DataCard title="Tabel ke thx" />
                    </Col>
                    <Col lg="6" sm="10" className="mb-3">
                        <DataCard title="tabel ke poulll"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

if ( document.getElementById('dashboard') ){
    ReactDOM.render(
        <DashboardApp />,
        document.getElementById('dashboard')
    );
}

