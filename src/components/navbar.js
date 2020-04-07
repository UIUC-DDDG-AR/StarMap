import React from "react";
import "./navbar.css";
import Logo from "../starmaplogo.svg";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>

                <span className="navbar">
                    <Link to="/capability">
                        <span>AR CAPABILITIES</span>
                    </Link>
                    <Link to="/tools">
                        <span>TOOLS FOR AR</span>
                    </Link>
                    <Link to="/interactive">
                        <span>[INTERACTIVE THING]</span>
                    </Link>
                </span>
            </div>
        );
    }
}
export default NavBar;
