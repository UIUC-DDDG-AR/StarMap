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

    return (
        <React.Fragment>
            <div className={classes.header}>
                <Container className={classes.container}>
                    <h1>Augmented Reality Capabilities</h1>
                </Container>
            </div>

            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {capability_information.map((capability) => {
                        return (
                            <Grid item xs={6}>
                                <Card className={classes.card}>
                                    <h2 className={classes.title}>
                                        {capability.name}
                                    </h2>

                                    <CardMedia
                                        className={classes.media}
                                        image={`/images/capability/${capability.key}.jpg`}
                                    />
                                    <CardContent className={classes.content}>
                                        {capability.Descripton}
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default CapabilityPage;
