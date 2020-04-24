import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "../starmaplogo.png";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 5vw",
    },
    nav: {
        flexGrow: 1,
        background: "#011140",
    },
    space: {
        flexGrow: 1,
    },
    icon: {
        position: "relative",
        width: "8em",
        height: "6em",
        objectFit: "contain"
    },
    font: {
        margin: 0,
        padding: 0,
        textTransform: "capitalize"
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.nav} position="fixed">
            <Container className={classes.container}>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        <img className={classes.icon} src={Logo} alt="Logo" />
                    </Button>

                    <span className={classes.space}></span>
                    <Button color="inherit" component={Link} to="/capability">
                        AR CAPABILITIES
                    </Button>
                    <Button color="inherit" component={Link} to="/interactive">
                        Tools Suggestion
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
