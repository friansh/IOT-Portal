import React from "react";
import Chart from "../Chart";
import { bgbox } from "../Card";
import { Container } from "react-bootstrap";

let dataChart = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            borderColor: "#2980b9",
            data: [0, 10, 5, 2, 20, 30, 45]
        }
    ]
};

class ChartCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="p-3" style={bgbox}>
                <Chart
                    title={this.props.title}
                    data={dataChart}
                    type={this.props.type}
                />
            </Container>
        );
    }
}

export default ChartCard;
