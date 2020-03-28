import React, { Fragment } from "react";

import Card from "../components/card";
import Logo from "../logo.svg";

const pageData = [
    {
        title: "Tracking & Recognition",
        img: Logo,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna ac placerat vestibulum lectus. Sagittis aliquam malesuada bibendum arcu."
    },
    {
        title: "Displaying Information",
        img: Logo,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna ac placerat vestibulum lectus. Sagittis aliquam malesuada bibendum arcu."
    },
    {
        title: "Augmentation & Interaction",
        img: Logo,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna ac placerat vestibulum lectus. Sagittis aliquam malesuada bibendum arcu."
    }
];

const CapabilityPage = () => {
    return (
        <Fragment>
            <div className="header">
                <h1>AR Capability</h1>
            </div>
            <div className="body">
                {pageData.map(data => (
                    <Card orient="horizontal" title={data.title} img={data.img}>
                        {data.text}
                    </Card>
                ))}
            </div>
        </Fragment>
    );
};
export default CapabilityPage;
