import React, { Component, Fragment } from "react";

import Card from "../components/card";
import Logo from "../logo.svg";
import "./interactivePage.css";

import Capability from "../data/capability";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

class InteractivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxes: [],
            chips: []
        };
    }

    handleClick(data) {
        if (this.state.checkboxes.includes(data)) {
            this.setState({
                checkboxes: this.state.checkboxes.filter(
                    checkbox => checkbox != data
                )
            });
        } else {
            this.setState({ checkboxes: [...this.state.checkboxes, data] });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <h1>Interactive Thing</h1>
                </div>

                <div className="body1">
                    <div className="search-categories">
                        <button class="accordion">
                            Tracking & Recognition
                        </button>
                        <div class="panel">
                            <ul>
                                {Capability.map(data => (
                                    <li>
                                        <input
                                            type="checkbox"
                                            onClick={this.handleClick.bind(
                                                this,
                                                data.title
                                            )}
                                        />{" "}
                                        {data.title}
                                    </li>
                                ))}
                            </ul>
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
