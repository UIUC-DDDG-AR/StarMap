import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"

import Logo from "../starmaplogoblue.png";

const LandingPageHeader = () => {
    const classes = makeStyles({
        root: {
            display: "flex",
            background: "#011140",
            color: "white",
            height: "70vh",
            backgroundImage: `url("/images/stars.svg")`,
        },
        container: {
            display: "flex",
            alignItems: "center",
            backgroundImage: `url("/images/nav-stars.svg")`,
        },
        content: {
            maxWidth: "700px",
            textAlign: "left",
        },
        star: {
            opacity: 0.8,
            objectFit: "contain"
        },
        button2: {
            display: "inline-block",
            backgroundColor: "#2C7BBF",
            borderWidth: "1px solid #2C7BBF",
            borderRadius: "10vw",
            boxSizing: "border-box",
            color: "white",
            textDecoration: "none",
            padding: "16px",
            margin: "0 0.1em 1em 0",
            '&:hover': {
                backgroundColor: "#FFB84E",
                color: "black"
            }
        },
        button1: {
            display: "inline-block",
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "10vw",
            boxSizing: "border-box",
            color: "white",
            textDecoration: "none",
            padding: "16px",
            margin: "0 1.25em",
            '&:hover': {
                borderColor: "#FFB84E",
                color: "#FFB84E"
            }
        }
    })()

    return (
        <div className={classes.root}>
            <Container maxWidth="xl" className={classes.container}>
                <div className={classes.content}>
                    <Typography variant="h1" gutterBottom>Find the right tools for your augmented reality project.</Typography>
                    <Link className={classes.button2} to="capability">Explore AR Capabilities</Link>
                    <Link className={classes.button1} to="interactive">View AR Tools Suggestion →</Link>
                </div>
            </Container>
        </div>
    )
}

const LandingPageContent = () => {
    const classes = makeStyles({
        root: {
            margin: "4em 0",
        },
        media: {
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "250px",
        },
    })()
    return (
        <Container maxWidth="xl">
            <Grid className={classes.root} container spacing={2} >
                <Grid item sm={6}>
                    <img className={classes.media} src={Logo} alt="Startmap Logo" />
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h5" gutterBottom>What is STARMAP and how can it help you?</Typography>
                    <Typography variant="p">
                        Augmented Reality is a rapidly evolving technology. STARMAP (Suggestion Tool for Augmented
                        Reality Makers and Programmers) helps developers navigate the variety of hardware and software
                        used to create Augmented Reality (AR) experiences. Whether you are an experienced AR developer
                        or are embarking on your first AR project, STARMAP can guide you through the development process.
                        Use STARMAP to learn about your options for AR Tools and supported features.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

const LandingPage = () => {
    return (
        <Fragment>
            <LandingPageHeader />
            <LandingPageContent />
        </Fragment>
    );
};
export default LandingPage;
