import React from 'react';
import { Bar, Line, Doughnut } from "react-chartjs-2";

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: this.props.title
                }
            },
            hehe: true
        };
    }

    render() {
        switch (this.props.type) {
            case "line":
                return(<Line data={this.props.data} options={this.state.options}/>);

            case "bar":
                return(<Bar data={this.props.data} options={this.state.options}/>);

            case "doughnut":
                return(<Doughnut data={this.props.data} options={this.state.options}/>);

            default:
                return(<h1>Invalid chart type</h1>)
        }
    }
}

export default Chart
