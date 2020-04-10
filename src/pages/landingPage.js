import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Logo from "../logo.png";

const useStyles = makeStyles({
    container: {
        padding: "1em 5vw",
    },
    header: {
        paddingTop: "3em",
        background: "#011140",
        color: "white",
        backgroundImage: `url("/images/Stars.png")`,
    },
    title: {
        fontSize: "4em",
        fontWeight: 400,
    },
    subHeader: {
        maxWidth: "600px",
        padding: "4em 0",
        backgroundImage: `url("/images/NavStar.png")`,
    },
    star: {
        opacity: 0.8,
        objectFit: "contain"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
    },
    content: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        padding: "1em 0",
    },
    media: {
        flex: 1,
        height: "30vh",
        width: "30vw",
        objectFit: "cover",
    },
    text: {
        flex: 1,
    },
    button1: {
        display: "inline-block",
        backgroundColor: "#2C7BBF",
        borderWidth: "0px",
        borderRadius: "10vw",
        boxSizing: "border-box",
        color: "white",
        textDecoration: "none",
        padding: "16px",
        margin: "0 0.5em",
        '&:hover': {
            backgroundColor: "#FFB84E",
            color: "black"
        }
    },
    button2: {
        display: "inline-block",
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "10vw",
        boxSizing: "border-box",
        color: "white",
        textDecoration: "none",
        padding: "16px",
        margin: "0 0.5em",
        '&:hover': {
            backgroundColor: "#FFB84E",
            color: "black"
        }
    }
});

const LandingPage = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.header}>
                <Container className={classes.container}>
                    <div className={classes.subHeader}>
                        <h1 className={classes.title}>Find the right tools for your augmented reality project.</h1>
                        <Link className={classes.button1} to="interactive">[INTERACTIVE THING] →</Link>
                        <Link className={classes.button2} to="capability">EXPLORE AR CAPABILITIES</Link>
                    </div>
                </Container>

            </div>
            <Container className={classes.container}>
                <Card className={classes.card}>
                    <h2>What is StarMap?</h2>

                    <div className={classes.content}>
                        <CardMedia className={classes.media} image={Logo} />
                        <CardContent className={classes.text}>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Sagittis orci a scelerisque purus semper.
                            Aliquet sagittis id consectetur purus ut faucibus
                            pulvinar elementum. Eu tincidunt tortor aliquam nulla.
                            Pharetra magna ac placerat vestibulum lectus. Sagittis
                            aliquam malesuada bibendum arcu.
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.card}>
                    <h2 >How can StarMap help you?</h2>

                    <CardContent className={classes.content}>
                        <CardMedia className={classes.media} image={Logo} />
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis orci a scelerisque purus semper.
                        Aliquet sagittis id consectetur purus ut faucibus
                        pulvinar elementum. Eu tincidunt tortor aliquam nulla.
                        Pharetra magna ac placerat vestibulum lectus. Sagittis
                        aliquam malesuada bibendum arcu.</p>
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    );
};
export default LandingPage;
