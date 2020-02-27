import React from "react";
import {
    Accordion,
    Container,
    Row,
    Col,
    Card,
    Button,
    Modal,
    Form
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";
import Axios from "axios";
import Swal from "sweetalert2";

class ToggleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            opened: true,
            editModal: false,
            editName: this.props.title,
            editDescription: this.props.description
        };
        this.handleAccordionChange = this.handleAccordionChange.bind(this);
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
        this.handleEditModalHide = this.handleEditModalHide.bind(this);
        this.handleEditModalShow = this.handleEditModalShow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getToggles = this.getToggles.bind(this);
        this.handleEditName = this.handleEditName.bind(this);
        this.handleEditDescription = this.handleEditDescription.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleAccordionChange(checked) {
        this.setState({ checked });
    }

    handleAccordionClick() {
        this.setState(state => ({
            opened: !state.opened
        }));
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
        Axios.put("/toggle/" + self.props.id, {
            name: self.state.editName,
            description: self.state.editDescription
        })
            .then(() =>
                Swal.fire(
                    "Success!",
                    "Toggle <b>" + self.props.title + "</b> has been edited.",
                    "success"
                )
            )
            .catch(() =>
                Swal.fire(
                    "Failed!",
                    "Toggle <b>" +
                        self.props.title +
                        "</b> has not been edited.",
                    "error"
                )
            )
            .then(() => {
                self.getToggles();
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
                "Toggle <b>" + self.props.title + "</b> is about to be deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                Axios.delete("/toggle/" + self.props.id)
                    .then(() =>
                        Swal.fire(
                            "Deleted!",
                            "Toggle <b>" +
                                self.props.title +
                                "</b> has been deleted.",
                            "success"
                        )
                    )
                    .catch(() =>
                        Swal.fire(
                            "Error!",
                            "Toggle <b>" +
                                self.props.title +
                                "</b> has not been deleted.",
                            "error"
                        )
                    )
                    .then(self.getToggles);
            }
        });
    }

    getToggles() {
        let getToggles = this.props.getToggles;
        Axios.get("/toggle").then(request => getToggles(request));
    }

    render() {
        return (
            <Card
                style={{
                    boxShadow: "3px 3px 20px 0px rgba(0,0,0,0.18)"
                }}
            >
                <Card.Header>
                    <span>{this.props.title}</span>
                </Card.Header>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleAccordionChange}
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
                <small className="text-muted ml-3 mb-3">
                    Last switched:
                    <br />
                    {this.props.lastSwitched}
                </small>
                <Accordion>
                    <Accordion.Toggle
                        as={Button}
                        variant="info"
                        eventKey="0"
                        style={{ width: "100%" }}
                        onClick={this.handleAccordionClick}
                    >
                        <span>
                            More Info{" "}
                            {this.state.opened ? (
                                <FontAwesomeIcon icon="arrow-circle-down" />
                            ) : (
                                <FontAwesomeIcon icon="arrow-circle-up" />
                            )}
                        </span>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Container fluid className="my-2">
                            <Row>
                                <Col>
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 500
                                        }}
                                    >
                                        Toggle ID:
                                    </span>
                                    <br />
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: 400
                                        }}
                                    >
                                        {this.props.id}
                                    </span>
                                    <br />
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 500
                                        }}
                                    >
                                        Created:
                                    </span>
                                    <br />
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: 400
                                        }}
                                    >
                                        {this.props.created}
                                    </span>
                                    <br />
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 500
                                        }}
                                    >
                                        Toggle Description:
                                    </span>
                                    <br />
                                    <span
                                        className="text-muted"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: 400
                                        }}
                                    >
                                        {this.props.description}
                                    </span>
                                    <br />
                                    <hr />
                                </Col>
                            </Row>
                            <Row className="justify-content-end mr-1">
                                <div
                                    className="btn-group mb-2"
                                    role="group"
                                    aria-label="First group"
                                >
                                    <Button
                                        variant="warning"
                                        onClick={this.handleEditModalShow}
                                    >
                                        <FontAwesomeIcon icon="edit" />
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={this.handleDelete}
                                    >
                                        <FontAwesomeIcon icon="trash" />
                                    </Button>
                                    <Modal
                                        show={this.state.editModal}
                                        onHide={this.handleEditModalHide}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Edit Toggle
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Toggle Name:
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
                                                        Toggle Description:
                                                    </Form.Label>
                                                    <Form.Control
                                                        as={"textarea"}
                                                        rows={"3"}
                                                        defaultValue={
                                                            this.props
                                                                .description
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
                                                onClick={
                                                    this.handleEditModalHide
                                                }
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
                                </div>
                            </Row>
                        </Container>
                    </Accordion.Collapse>
                </Accordion>
            </Card>
        );
    }
}

export default ToggleCard;
