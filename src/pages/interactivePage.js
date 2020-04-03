import React, { Component, Fragment } from "react";

import Card from "../components/card";
import Logo from "../logo.svg";
import "./interactivePage.css";

import Capability from "../data/capability";

class InteractivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxes: [],
            chips: []
        };
    }

    handleCheckbox(label) {
        if (this.state.checkboxes.includes(label)) {
            this.setState({
                checkboxes: this.state.checkboxes.filter(
                    checkbox => checkbox != label
                )
            });
        } else {
            this.setState({ checkboxes: [...this.state.checkboxes, label] });
        }
    }

    handleAccordion(id) {
        let panel = document.getElementById(id);
        if (panel) {
            panel.classList.toggle("panel-active");
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <h1>Interactive Thing</h1>
                </div>

                <div className="toggle-container">
                    <span className="toggle-option">Hardware Tools</span>
                    <span className="toggle-option">Software Tools</span>
                </div>

                <div className="select-container">
                    <select className="select-option" id="filter">
                        <option value="Hide Filters">Hide Filters</option>
                    </select>
                    <select className="select-option" id="filter">
                        <option value="Sort By">Sort By</option>
                    </select>
                </div>

                <div className="interactive-body">
                    <div className="search-categories">
                        <div
                            className="accordion"
                            onClick={this.handleAccordion.bind(
                                this,
                                "Tracking & Recognition"
                            )}
                        >
                            <span>Tracking &amp; Recognition</span>
                        </div>
                        <div id="Tracking &amp; Recognition" className="panel">
                            <ul>
                                {Capability.map(data => (
                                    <li>
                                        <input
                                            type="checkbox"
                                            onClick={this.handleCheckbox.bind(
                                                this,
                                                data.title
                                            )}
                                        />{" "}
                                        {data.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="accordion"
                            onClick={this.handleAccordion.bind(
                                this,
                                "Something else"
                            )}
                        >
                            <span>Something else</span>
                        </div>
                    </div>
                    <div className="cards">
                        {Capability.map(data => (
                            <Card
                                orient="horizontal"
                                title={data.title}
                                img={Logo}
                            >
                                {data.text}
                            </Card>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default InteractivePage;
