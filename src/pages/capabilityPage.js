import React, { Fragment } from "react";

import Card from "../components/card";
import CapabilityData from "../data/capability"
import Logo from "../logo.svg";

const CapabilityPage = () => {
    return (
        <Fragment>
            <div className="header">
                <h1>AR Capability</h1>
            </div>
            <div className="body">
                {CapabilityData.map(data => (
                    <Card orient="horizontal" title={data.title} img={Logo}>
                        {data.text}
                    </Card>
                ))}
            </div>
        </Fragment>
    );
};
export default CapabilityPage;
