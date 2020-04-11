import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Logo from "../starmaplogoblue.png";

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
        textAlign: "right",
        marginRight: 122,
        marginTop:30,


    },
    content: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        padding: ".25em 0",
        marginLeft: 175,
        marginRight: -10,
        textAlign: "left",

    },
    media: {
        flex: 1,
        height: "20vh",
        width: "20vw",
        objectFit: "cover",
        marginLeft: -160,
        marginTop:-70,
        marginRight:25,
    },
    text: {
        marginTop:-15,
        flex: 1, 
        fontSize: 18,
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
                        <Link className={classes.button1} to="interactive">View AR Tools Suggestion →</Link>
                        <Link className={classes.button2} to="capability">Explore AR Capabilities</Link>
                    </div>
                </Container>

            </div>
            <Container className={classes.container}>
                <Card className={classes.card}>
                    <h2>What is STARMAP and how can it help you?</h2>

                    <div className={classes.content}>
                        <CardMedia className={classes.media} image={Logo} />
                        <CardContent className={classes.text}>
                        Augmented Reality is a rapidly evolving technology. STARMAP (Suggestion Tool for Augmented
Reality Makers and Programmers) helps developers navigate the variety of hardware and software used to create Augmented Reality (AR) experiences.  Whether you are an experienced AR developer or are embarking on your first AR project, STARMAP can guide you through the development process. Use STARMAP to learn about your options for AR Tools and supported features.

                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.card}>

                    <div className={classes.content}>
                    
                        <CardContent className={classes.text}>
                         
                        </CardContent>
                    </div>
                </Card>
            </Container>
        </Fragment>
    );
};
export default LandingPage;
