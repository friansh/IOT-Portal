import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chart from "./Chart";
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap'
import Switch from "react-switch";

class SmallCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <span><FontAwesomeIcon icon={this.props.icon} color={this.props.iconColor}/> {this.props.title}</span>
                </Card.Header>
                <Card.Body>
                    <h5>{this.props.content}</h5>
                </Card.Body>
            </Card>
        );
    }
}

const bgbox = {
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.3)"
}

class DataCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="container p-3" style={bgbox}>
                <div className="row">
                    <div className="col">
                        <h5>{this.props.title}</h5>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm">Selengkapnya
                        </button>
                    </div>
                    <div className="col justify-content-end d-flex">
                        <small className="text-muted mr-2">Showing 4 from 11 devices</small>
                    </div>
                </div>
            </div>
        )
    }
}

let dataChart= {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        borderColor: "#2980b9",
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
}

class ChartCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p-3" style={bgbox}>
                <Chart title={this.props.title} data={dataChart} type={this.props.type}/>
            </div>
        );
    }
}

class ToggleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render(){
        return(
            <Card>
                <Card.Header>
                    <span>{this.props.title}</span>
                </Card.Header>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="mr-auto ml-auto my-4"
                />
                <small className="text-muted ml-3 mb-3">Last switched:<br/>{this.props.lastSwitched}</small>
                <Accordion>
                    <Accordion.Toggle as={Button} variant="primary" eventKey="0" style={{width: "100%"}}>
                        More Info <FontAwesomeIcon icon="arrow-circle-down"/>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Container fluid className="my-2">
                            <Row>
                                <Col>
                                    <span className="text-muted">Toggle ID:</span><br/>
                                    <span className="text-muted">...</span><br/>
                                    <span className="text-muted">Created:</span><br/>
                                    <span className="text-muted">...</span><br/>
                                    <span className="text-muted">Toggle Description:</span><br/>
                                    <span className="text-muted">...</span><br/>
                                    <hr/>
                                </Col>
                            </Row>
                            <Row className="justify-content-end mr-1">
                                <div className="btn-group mb-2" role="group" aria-label="First group">
                                    <Button variant="warning">
                                        <FontAwesomeIcon icon="edit" color="white"/>
                                    </Button>
                                    <Button variant="danger">
                                        <FontAwesomeIcon icon="trash" color="white"/>
                                    </Button>
                                </div>
                            </Row>
                        </Container>
                    </Accordion.Collapse>
                </Accordion>
            </Card>
        )
    }
}

export {
    SmallCard,
    ChartCard,
    DataCard,
    ToggleCard
}
