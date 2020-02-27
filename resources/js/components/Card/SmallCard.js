import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

class SmallCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ boxShadow: "3px 3px 20px 0px rgba(0,0,0,0.18)" }}>
                <Card.Header>
                    <span>
                        <FontAwesomeIcon
                            icon={this.props.icon}
                            color={this.props.iconColor}
                        />{" "}
                        {this.props.title}
                    </span>
                </Card.Header>
                <Card.Body>
                    <h5>{this.props.content}</h5>
                </Card.Body>
            </Card>
        );
    }
}

export default SmallCard;
