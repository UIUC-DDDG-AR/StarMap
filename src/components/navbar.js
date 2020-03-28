import React from "react";
import "./navbar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>

                <span className="navbar">
                    <Link to="/capability">
                        <span>AR Capabilities</span>
                    </Link>
                    <Link to="/tools">
                        <span>Tools for AR</span>
                    </Link>
                    <Link to="/interactive">
                        <span>[Interactive Thing]</span>
                    </Link>
                </span>
            </div>
        );
    }
}
export default NavBar;
