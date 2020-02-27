import React from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import {
    Container,
    Row,
    Col,
    Card,
    ButtonGroup,
    Button,
    Modal,
    Form
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModal: false,
            editName: this.props.title,
            editDescription: this.props.description
        };
        this.handleEditModalHide = this.handleEditModalHide.bind(this);
        this.handleEditModalShow = this.handleEditModalShow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getListings = this.getListings.bind(this);
        this.handleEditName = this.handleEditName.bind(this);
        this.handleEditDescription = this.handleEditDescription.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEditName(e) {
        this.setState({
            editName: e.target.value
        });
    }

    handleEditDescription(e) {
        this.setState({
            editDescription: e.target.value
        });
    }

    handleEdit() {
        let self = this;
        Axios.put("/listing/" + self.props.id, {
            name: self.state.editName,
            description: self.state.editDescription
        })
            .then(() =>
                Swal.fire(
                    "Success!",
                    "Listing <b>" + self.props.title + "</b> has been edited.",
                    "success"
                )
            )
            .catch(() =>
                Swal.fire(
                    "Failed!",
                    "Listing <b>" +
                        self.props.title +
                        "</b> has not been edited.",
                    "error"
                )
            )
            .then(() => {
                self.getListings();
                self.handleEditModalHide();
            });
    }

    handleEditModalShow() {
        this.setState({
            editModal: true
        });
    }

    handleEditModalHide() {
        this.setState({
            editModal: false
        });
    }

    handleDelete() {
        let self = this;
        Swal.fire({
            title: "Are you sure?",
            html:
                "Listing <b>" +
                self.props.title +
                "</b> is about to be deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                Axios.delete("/listing/" + self.props.id)
                    .then(() =>
                        Swal.fire(
                            "Deleted!",
                            "Listing <b>" +
                                self.props.title +
                                "</b> has been deleted.",
                            "success"
                        )
                    )
                    .catch(() =>
                        Swal.fire(
                            "Error!",
                            "Listing <b>" +
                                self.props.title +
                                "</b> has not been deleted.",
                            "error"
                        )
                    )
                    .then(self.getListings);
            }
        });
    }

    getListings() {
        let getListings = this.props.getListings;
        Axios.get("/listing").then(request => getListings(request));
    }

    render() {
        return (
            <Card
                style={{
                    boxShadow: "3px 3px 20px 0px rgba(0,0,0,0.18)"
                }}
            >
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col>
                                <p>
                                    <span className={"text-muted"}>
                                        Listing ID:
                                    </span>
                                    <br />
                                    <span className={"text-muted"}>
                                        {this.props.id}
                                    </span>
                                    <br />
                                </p>
                                <p>
                                    <span className={"text-muted"}>
                                        Created:
                                    </span>
                                    <br />
                                    <span className={"text-muted"}>
                                        {this.props.created}
                                    </span>
                                    <br />
                                </p>
                                <p>
                                    <span className={"text-muted"}>
                                        Listing Description:
                                    </span>
                                    <br />
                                    <span className={"text-muted"}>
                                        {this.props.description}
                                    </span>
                                    <br />
                                </p>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                className={"justify-content-end d-flex"}
                                style={{ padding: 0 }}
                            >
                                <ButtonGroup className="mr-2">
                                    <Button variant={"primary"}>
                                        <FontAwesomeIcon icon={"stream"} />
                                    </Button>
                                    <Button variant={"info"}>
                                        <FontAwesomeIcon icon={"list"} />
                                    </Button>
                                    <Button
                                        variant={"warning"}
                                        onClick={this.handleEditModalShow}
                                    >
                                        <FontAwesomeIcon icon={"edit"} />
                                    </Button>
                                    <Button
                                        variant={"danger"}
                                        onClick={this.handleDelete}
                                    >
                                        <FontAwesomeIcon icon={"trash"} />
                                    </Button>
                                </ButtonGroup>
                                <Modal
                                    show={this.state.editModal}
                                    onHide={this.handleEditModalHide}
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Listing</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>
                                                    Listing Name:
                                                </Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    defaultValue={
                                                        this.props.title
                                                    }
                                                    onChange={
                                                        this.handleEditName
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>
                                                    Listing Description:
                                                </Form.Label>
                                                <Form.Control
                                                    as={"textarea"}
                                                    rows={"3"}
                                                    defaultValue={
                                                        this.props.description
                                                    }
                                                    onChange={
                                                        this
                                                            .handleEditDescription
                                                    }
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={this.handleEditModalHide}
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={this.handleEdit}
                                        >
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}

export default ListingCard;
