import React from 'react';
import './navbar.css'
import Logo from '../../logo.svg'

class NavBar extends React.Component {
    render() {
        const {updatePageType} = this.props;

        return (
            <div className="nav">
                <img src={Logo}  alt = "Logo" onClick={updatePageType.bind(this, "landing")} />

                <span className="navbar">
                    <span className="" onClick={updatePageType.bind(this, "features")}>AR Capabilities</span>
                    <span className="" onClick={updatePageType.bind(this, "tools")}>Tools for AR</span>
                    <span className="" onClick={updatePageType.bind(this, "interactive")}>[Interactive Thing]</span>
                </span>
            </div>
        );
    }
}

export default NavBar;


