import React, { Fragment } from "react";

import Card from "../components/card";
import CapabilityData from "../data/capability"
import Logo from "../logo.svg";

const CapabilityPage = () => {
    var arr = [];
    return (
        <Fragment>
            <div>
                    {Object.keys(CapabilityData).forEach(function(element) {
                            console.log(element)
                            arr.push(CapabilityData[element])
                    })}
                </div>    


            <div className="header">
                <h1>Augmented Reality Capabilities</h1>
            </div>
            <div className="body">
                {arr.map((element, index, arrayobj) => {
                    return(
                        element.map((data, index, arrayobj) => (
                            <Card key ={index} orient="horizontal" title={data.title} img={Logo}>
                                {data.text}
                            </Card>
                        ))
                    )
                })}
            </div>
        </Fragment>
    );
};
export default CapabilityPage;
