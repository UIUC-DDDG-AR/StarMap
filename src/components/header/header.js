import React from "react";
import "./header.css";

const LandingHeader = () => {
    return (
        <div className="header">
            <h1>Find the right tools for your augmented reality project.</h1>
        </div>
    )
}

const ToolsHeader = () => {
    return (
        <div className="header">
            <h1>TOOLS FOR AR</h1>
        </div>
    )
}

const CapabilityHeader = () => {
    return (
        <div className="header">
            <h1>AR Capability</h1>
        </div>
    )
}

const InteractionHeader = () => {
    return (
        <div className="header">
            <h1>[Interaction Thing]</h1>
        </div>
    )
}

const RenderHeader = (props) => {
    const pageType = props.pageType;
    if(pageType === "interactive"){
        return <InteractionHeader />
    } else if (pageType === "capability"){
        return <CapabilityHeader />
    } else if (pageType === "tools") {
        return <ToolsHeader />
    } else {
        return <LandingHeader />
    }
};

class Header extends React.Component {
    render() {
        return (
            <RenderHeader pageType={this.props.pageType}/>
        );
    }
}

export default Header;
