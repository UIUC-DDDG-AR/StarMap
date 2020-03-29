import React, { Component, Fragment } from "react";

import Card from "../components/card";
import Logo from "../logo.svg";
import "./interactivePage.css";

import CapabilityData from "../data/capability"


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
  
    render() {
        return (
            <Fragment>
                <div className="header">
                    <h1>Interactive Thing</h1>
                </div>
                
                <div className="body1">
                    <div className="search-categories">
                        <button class="accordion" >Tracking & Recognition</button>
                        <div class="panel">
                            <ul>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                            </ul>
                            
                        </div>
                        <button class="accordion">Display of Information</button>
                        <div class="panel">
                            <ul>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                            </ul>
                        </div>
                        <button class="accordion">Augmentation and Interaction</button>
                        <div class="panel">
                            <ul>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                                <li><input type="checkbox"/> checkbox 1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards">
                    {CapabilityData.map(data => (
                    <Card orient="horizontal" title={data.title} img={Logo}>
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
