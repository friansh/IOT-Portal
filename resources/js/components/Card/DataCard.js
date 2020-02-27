import React from "react";
import { bgbox } from "../Card";
import { Container, Row, Col, Button } from "react-bootstrap";

class DataCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="p-3" style={bgbox}>
                <Row>
                    <Col>
                        <h5>{this.props.title}</h5>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <div className="col"></div>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" size="sm">
                            Selengkapnya
                        </Button>
                    </Col>
                    <Col className="justify-content-end d-flex">
                        <small className="text-muted mr-2">
                            Showing 4 from 11 devices
                        </small>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DataCard;
