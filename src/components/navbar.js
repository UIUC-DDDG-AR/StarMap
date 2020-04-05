import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
    nav: {
        flexGrow: 1,
        background: "#011140",
        padding: "0 10vw",
    },
    space: {
        flexGrow: 1,
    },
    icon: {
        width: 40,
    },
    font: {
        margin: 0,
        padding: 0,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.nav} position="fixed">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    <h3 className={classes.font}>Star</h3>
                    <img className={classes.icon} src={Logo} alt="Logo" />
                    <h3 className={classes.font}>Map</h3>
                </Button>

                <span className={classes.space}></span>
                <Button color="inherit" component={Link} to="/capability">
                    AR CAPABILITIES
                </Button>
                <Button color="inherit" component={Link} to="/tools">
                    TOOLS FOR AR
                </Button>
                <Button color="inherit" component={Link} to="/interactive">
                    [Interactive Thing]
                </Button>
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;
