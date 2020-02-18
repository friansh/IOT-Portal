import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrash, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToggleCard } from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

library.add(faPlus, faEdit, faTrash, faArrowCircleDown);

class ToggleApp extends React.Component {
    render() {
        return(
            <div className="container mt-4 justify-content-center">
                <Row className="mb-3">
                    <div className="col">
                        <h1>Control your pheriperals.</h1>
                    </div>
                </Row>

                <Row>
                    <div className="col-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Toggle</li>
                            </ol>
                        </nav>
                    </div>
                </Row>

                <Row>
                    <div className="col-lg-2 mb-3">
                        <ToggleCard title="Switch 1" lastSwitched="Kemarin"/>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <ToggleCard title="Switch 2" lastSwitched="Aku"/>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <ToggleCard title="Switch 3" lastSwitched="Masih"/>
                    </div>
                </Row>

                <Row className="mt-3">
                    <div className="col">
                        <button id="toggle-add" type="button" className="btn btn-success">
                            <span><FontAwesomeIcon icon="plus"/> Add New Toggle</span>
                        </button>
                    </div>
                </Row>
            </div>
        )
    }
}

if ( document.getElementById('toggle') ) {
    ReactDOM.render(
        <ToggleApp/>,
        document.getElementById('toggle')
    )
}
