import React, { Component, Fragment } from "react";

import "./interactivePage.css";

import Card from "../components/card";
import Logo from "../logo.svg";

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
                    checkbox => checkbox !== label
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
        var arr = [];
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

                

                
                <div>
                    {Object.keys(Capability).forEach(function(element) {
                            console.log(element)
                            console.log(Capability[element])
                            arr.push(element)
                    })}
                </div>    

                <div className="interactive-body">
                    <div className="search-categories">
                        {arr.map(element => (
                            <>
                                <div
                                    className="accordion"
                                    onClick={this.handleAccordion.bind(
                                        this,
                                        element
                                    )}
                                >
                                    <span>{element}</span>
                                </div>
                                <div id={element} className="panel">
                                    <ul>
                                        {Capability[element].map(data => (
                                            
                                            <li key ={data.title}>
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
                            </>
                        ))}
                    </div>
                    
                    <div className="cards-container">
                        {arr.map(element => {
                            return(
                                Capability[element].map((data, index, arrayobj) => (
                                    <Card key ={index} orient="horizontal" title={data.title} img={Logo}>
                                        {data.text}
                                    </Card>
                                ))
                            )
                        })}
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}
export default InteractivePage;
