import React from 'react'
import ReactDOM from "react-dom";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bg-light border-right d-lg-block pt-3" id="sidebar-wrapper">
                <div className="sidebar-heading text-center">friansh IDCARE</div>
                <div className="list-group list-group-flush mt-3">
                    <a href=""
                       className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <a href=""
                       className="list-group-item list-group-item-action bg-light">Listings</a>
                    <a href=""
                       className="list-group-item list-group-item-action bg-light">Toggles</a>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Sidebar />,
    document.getElementById('sidebar')
);
