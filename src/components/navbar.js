import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "../starmaplogo.png";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 5,
    },
    icon: {
        position: "relative",
        width: "8em",
        height: "3em",
        objectFit: "contain"
    },
    buttonDesktop: {
        display: 'none',
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar color="primary" position="fixed">
            <Container maxWidth="xl">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        <img className={classes.icon} src={Logo} alt="Logo" />
                    </Button>

                    <span className={classes.space}></span>
                    <Button className={classes.buttonDesktop} color="inherit" component={Link} to="/usecase">
                        Applications
                    </Button>
                    <Button className={classes.buttonDesktop} color="inherit" component={Link} to="/capability">
                        capabilities
                    </Button>
                    <Button className={classes.buttonDesktop} color="inherit" component={Link} to="/interactive">
                        Tools
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
