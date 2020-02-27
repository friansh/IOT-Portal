import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlus,
    faEdit,
    faTrash,
    faArrowCircleDown,
    faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    Form,
    Spinner
} from "react-bootstrap";
import ToggleCard from "./components/Card/ToggleCard";
import Axios from "axios";
import Swal from "sweetalert2";

library.add(faPlus, faEdit, faTrash, faArrowCircleDown, faArrowCircleUp);

class ToggleApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModal: false,
            addConfirmDialogue: true,
            toggles: [],
            newToggleName: "",
            newToggleDescription: "",
            loading: true
        };
        this.handleAddModalHide = this.handleAddModalHide.bind(this);
        this.handleAddModalShow = this.handleAddModalShow.bind(this);
        this.handleAddModalFinish = this.handleAddModalFinish.bind(this);
        this.updateNewToggleName = this.updateNewToggleName.bind(this);
        this.updateNewToggleDescription = this.updateNewToggleDescription.bind(
            this
        );
        this.getTogglesFromChild = this.getTogglesFromChild.bind(this);
        this.getToggles();
    }

    componentDidMount() {}

    getToggles() {
        this.setState({
            loading: true
        });
        let self = this;
        Axios.get("/toggle")
            .then(response =>
                self.setState({
                    toggles: response.data
                })
            )
            .catch(error => console.log(error))
            .then(() => {
                self.setState({
                    loading: false
                });
            });
    }

    getTogglesFromChild(toggles) {
        this.setState({
            toggles: toggles.data
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

        if (this.state.newToggleName == "") {
            Swal.fire("Gagal", "Nama toggle tidak boleh kosong", "error");
        } else {
            Axios.post("/toggle", {
                name: self.state.newToggleName,
                description: self.state.newToggleDescription
            })
                .then(() =>
                    Swal.fire(
                        "Sukses",
                        "Toggle " +
                            self.state.newToggleName +
                            " berhasil ditambahkan.",
                        "success"
                    )
                )
                .catch(
                    error => {
                        console.log(error.response);
                    }
                    // Swal.fire(
                    //     "Gagal",
                    //     "Toggle " +
                    //         self.state.newToggleName +
                    //         " gagal ditambahkan.",
                    //     "error"
                    // )
                )
                .then(self.handleAddModalHide(), self.getToggles());
        }
    }

    updateNewToggleName(e) {
        this.setState({
            newToggleName: e.target.value
        });
    }

    updateNewToggleDescription(e) {
        this.setState({
            newToggleDescription: e.target.value
        });
    }

    render() {
        return (
            <Container className="mt-4 justify-content-center">
                <Row className="mb-3">
                    <Col>
                        <h1 style={{ fontWeight: 300 }}>
                            Control your pheriperals.
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col lg={"3"}>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="">Dashboard</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Toggle
                                </li>
                            </ol>
                        </nav>
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
                    {this.state.toggles.map(toggle => (
                        <Col
                            lg="2"
                            md="4"
                            sm="6"
                            className="mb-4"
                            key={toggle.id}
                        >
                            <ToggleCard
                                id={toggle.id}
                                title={toggle.name}
                                description={toggle.description}
                                created={toggle.created_at}
                                lastSwitched={toggle.updated_at}
                                getToggles={this.getTogglesFromChild}
                            />
                        </Col>
                    ))}
                </Row>

                <Row className="mt-3">
                    <Col>
                        <Button
                            variant="success"
                            onClick={this.handleAddModalShow}
                        >
                            <span>
                                <FontAwesomeIcon icon="plus" /> Add New Toggle
                            </span>
                        </Button>

                        <Modal
                            show={this.state.addModal}
                            onHide={this.handleAddModalHide}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Add New Toggle</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Toggle Name:</Form.Label>
                                        <Form.Control
                                            type={"text"}
                                            placeholder={this.props.title}
                                            onChange={this.updateNewToggleName}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Toggle Description:
                                        </Form.Label>
                                        <Form.Control
                                            as={"textarea"}
                                            rows={"3"}
                                            placeholder={this.props.description}
                                            onChange={
                                                this.updateNewToggleDescription
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

if (document.getElementById("toggle")) {
    ReactDOM.render(<ToggleApp />, document.getElementById("toggle"));
}
