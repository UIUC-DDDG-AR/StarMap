import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import capability_information from "../data/capability_information";

const useStyles = makeStyles({
    header: {
        paddingTop: "4em",
        background: "#011140",
        color: "white",
    },
    container: {
        padding: "1em 5vw",
    },
    grid: {
        flexGrow: 1,
    },
    card: {
        boxShadow: "none",
    },
    title: {
        //padding: "1em",
    },
    media: {
        height: 300,
    },
    content: {
        fontSize: 14,
        padding: "1em 0",
    },
});

const CapabilityPage = () => {
    const classes = useStyles();
    const categories = new Set(capability_information.map((capability) => capability.category));

    return (
        <React.Fragment>
            <div className={classes.header}>
                <Container className={classes.container}>
                    <h1>Augmented Reality Capabilities</h1>
                </Container>
            </div>

            <Container className={classes.container}>
                {[...categories].map((category) => (
                    <React.Fragment>
                        <h2>{category}</h2>
                        <Grid container spacing={3}>
                            {capability_information
                                .filter((feature) => feature.category == category)
                                .map((capability) => (
                                    <Grid item xs={6}>
                                        <Card className={classes.card}>
                                            <h3 className={classes.title}>
                                                {capability.name}
                                            </h3>

                                            <CardMedia className={classes.media}
                                                image={`/images/capability/${capability.key}.jpg`}
                                            />
                                            <CardContent className={classes.content}>
                                                {capability.descripton}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </React.Fragment>
                ))}
            </Container>
        </React.Fragment>
    );
};
export default CapabilityPage;
