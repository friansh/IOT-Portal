import React from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Breadcrumb,
    Row,
    Col,
    Button,
    Modal,
    Form,
    Card,
    Accordion,
    ListGroup,
    Spinner
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusSquare,
    faStream,
    faList,
    faEdit,
    faTrashAlt,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Axios from "axios";
import Swal from "sweetalert2";
import ListingCard from "./components/Card/ListingCard";

library.add(faPlusSquare, faStream, faList, faEdit, faTrashAlt, faChartLine);

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModal: false,
            addConfirmDialogue: true,
            listings: [],
            newListingName: "",
            newListingDescription: "",
            loading: true
        };
        this.handleAddModalHide = this.handleAddModalHide.bind(this);
        this.handleAddModalShow = this.handleAddModalShow.bind(this);
        this.handleAddModalFinish = this.handleAddModalFinish.bind(this);
        this.updateNewListingName = this.updateNewListingName.bind(this);
        this.updateNewListingDescription = this.updateNewListingDescription.bind(
            this
        );
        this.getListingsFromChild = this.getListingsFromChild.bind(this);
        this.getListings();
    }

    getListings() {
        this.setState({
            loading: true
        });
        let self = this;
        Axios.get("/listing")
            .then(request =>
                self.setState({
                    listings: request.data
                })
            )
            .catch(error => console.log(error))
            .then(() =>
                self.setState({
                    loading: false
                })
            );
    }

    getListingsFromChild(listings) {
        this.setState({
            listings: listings.data
        });
    }

    handleAddModalHide() {
        this.setState({
            addModal: false
        });
    }

    handleAddModalShow() {
        this.setState({
            addModal: true
        });
    }

    handleAddModalFinish() {
        var self = this;

        if (this.state.newListingName == "") {
            Swal.fire("Gagal", "Nama listing tidak boleh kosong", "error");
        } else {
            Axios.post("/listing", {
                name: self.state.newListingName,
                description: self.state.newListingDescription
            })
                .then(() =>
                    Swal.fire(
                        "Sukses",
                        "Listing " +
                            self.state.newListingName +
                            " berhasil ditambahkan.",
                        "success"
                    )
                )
                .catch(() =>
                    Swal.fire(
                        "Gagal",
                        "Listing " +
                            self.state.newListingName +
                            " gagal ditambahkan.",
                        "error"
                    )
                )
                .then(self.handleAddModalHide(), self.getListings());
        }
    }

    updateNewListingName(e) {
        this.setState({
            newListingName: e.target.value
        });
    }

    updateNewListingDescription(e) {
        this.setState({
            newListingDescription: e.target.value
        });
    }

    render() {
        return (
            <Container className={"mt-4 justify-content-center"}>
                <Row className={"mb-3"}>
                    <Col>
                        <h1 style={{ fontWeight: 300 }}>Acquire your data.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={"3"}>
                        <Breadcrumb>
                            <Breadcrumb.Item href={"../dashboard"}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Listing</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    {this.state.loading ? (
                        <Col>
                            <Spinner animation="border" />
                        </Col>
                    ) : (
                        ""
                    )}
                    {this.state.listings.map(listing => (
                        <Col lg={"4"} className={"mb-3"} key={listing.id}>
                            <ListingCard
                                id={listing.id}
                                created={listing.created_at}
                                title={listing.name}
                                description={listing.description}
                                getListings={this.getListingsFromChild}
                            />
                        </Col>
                    ))}
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button
                            variant={"success"}
                            onClick={this.handleAddModalShow}
                        >
                            <span>
                                Add New Listing{" "}
                                <FontAwesomeIcon icon={"plus-square"} />
                            </span>
                        </Button>

                        <Modal
                            show={this.state.addModal}
                            onHide={this.handleAddModalHide}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Add New Listing</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Listing Name:</Form.Label>
                                        <Form.Control
                                            type={"text"}
                                            placeholder={this.props.title}
                                            onChange={this.updateNewListingName}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Listing Description:
                                        </Form.Label>
                                        <Form.Control
                                            as={"textarea"}
                                            rows={"3"}
                                            placeholder={this.props.description}
                                            onChange={
                                                this.updateNewListingDescription
                                            }
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={this.handleAddModalHide}
                                >
                                    Close
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={this.handleAddModalFinish}
                                >
                                    Add Listing
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const bgBoxShadow = {
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "2px 2px 20px 0px rgba(0,0,0,0.25)"
};

class ListingView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "hehe"
        };
    }

    render() {
        return (
            <Container className={"mt-4"}>
                <Row>
                    <Col md="auto">
                        <Breadcrumb>
                            <Breadcrumb.Item href={"../dashboard"}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={"./index"}>
                                Listing
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {this.props.title}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col lg="5">
                        <Card>
                            <Card.Header className="text-center">
                                <FontAwesomeIcon icon={"chart-line"} /> Grafik
                                data {this.state.title}
                            </Card.Header>
                            <Card.Body>
                                <h1>Ini buat grafik</h1>
                            </Card.Body>
                        </Card>

                        <Container
                            className={"container p-3 my-3"}
                            style={bgBoxShadow}
                        >
                            <Accordion>
                                <Accordion.Toggle
                                    as={Button}
                                    variant={"primary"}
                                    eventKey="0"
                                >
                                    Analisa Statistik
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <ListGroup className="mt-3">
                                        <ListGroup.Item>Mean:</ListGroup.Item>
                                        <ListGroup.Item>Median:</ListGroup.Item>
                                        <ListGroup.Item>Mode:</ListGroup.Item>
                                        <ListGroup.Item>
                                            Variant:
                                        </ListGroup.Item>
                                        <ListGroup.Item>Stdev: </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Collapse>
                            </Accordion>
                        </Container>
                        <Container className="p-3 mb-3" style={bgBoxShadow}>
                            <h1>Ini buat grafik</h1>
                            <small className="text-muted">
                                Jika besar frekuensi sama, urutan data diacak.
                            </small>
                        </Container>
                        <Container className="p-3 my-3" style={bgBoxShadow}>
                            <h1>Ini buat grafik</h1>
                            <small className="text-muted">
                                Diurutkan tujuh hari ke belakang (jika tidak ada
                                data masuk, tanggal tidak akan ditampilkan).
                            </small>
                        </Container>
                    </Col>
                    <Col lg="6">
                        <Card style={bgBoxShadow}>
                            <Card.Header>
                                <FontAwesomeIcon icon="list" /> Data{" "}
                                <strong>{this.props.title}</strong> yang
                                Tersedia
                            </Card.Header>
                            <Card.Body>
                                <h1>ini tabel</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

if (document.getElementById("listing")) {
    ReactDOM.render(<ListingIndex />, document.getElementById("listing"));
} else if (document.getElementById("listing-view")) {
    ReactDOM.render(<ListingView />, document.getElementById("listing-view"));
}
