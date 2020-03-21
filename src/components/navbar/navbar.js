import React, {Component} from 'react';
import './navbar.css'
import Logo from '../../logo.svg'

class NavBar extends Component {

    render() {
        const {onClick} = this.props;
        return (
            <div>
                <div className="grid-container">
                        <img className="" src = {Logo}  alt = "Logo" onClick={onClick.bind(this, "landing")} />
                        <div className="" onClick={onClick.bind(this, "suggestions")}>Tool Suggestions</div>
                        <div className="" onClick={onClick.bind(this, "features")}>All AR Features &amp; Tools</div>
                </div>
            </div>
        );
    }
}

export default NavBar;


