import React, { Component } from "react";
import "./header.css";

const LandingHeader = () => {
    return (
        <div className="header">
            <h1>Find the right tools for your augmented reality project.</h1>
        </div>
    );
};

const ToolsHeader = () => {
    return (
        <div className="header">
            <h1>TOOLS FOR AR</h1>
        </div>
    );
};

const CapabilityHeader = () => {
    return (
        <div className="header">
            <h1>AR Capability</h1>
        </div>
    );
};

const InteractionHeader = () => {
    return (
        <div className="header">
            <h1>[Interaction Thing]</h1>
        </div>
    );
};

const Header = (props) => {
    const pageType = props.pageType;
    let renderHeader;
    if (pageType === "interactive") {
        renderHeader = <InteractionHeader />;
    } else if (pageType === "capability") {
        renderHeader = <CapabilityHeader />;
    } else if (pageType === "tools") {
        renderHeader = <ToolsHeader />;
    } else {
        renderHeader = <LandingHeader />;
    }
    return renderHeader
}
export default Header;
