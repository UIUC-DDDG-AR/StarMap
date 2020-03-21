import React, {Component} from 'react';
import NavBar from "../navbar/navbar";

class Header extends Component {

    render() {
        return (
            <div>
                <NavBar onClick = {this.props.onClick} />
                <h1>Find the right tools for your augmented reality project.</h1>
            </div>
        );
    }
}

export default Header;

