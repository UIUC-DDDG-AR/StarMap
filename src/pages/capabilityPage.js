import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography"

import capability_information from "../data/capability_information";

const CapabilityPageHeader = () => {
    const classes = makeStyles({
        root: {
            background: "#011140",
            color: "white",
        },
        container: {
            display: "flex",
            alignItems: "flex-end",
            height: 170,
            paddingBottom: 30,
        },
    })()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl" className={classes.container}>
                <Typography variant="h4">Augmented Reality Capabilities</Typography>
            </Container>
        </div>
    )
}

const CapabilityPageContent = (props) => {
    const { categories } = props
    const classes = makeStyles({
        root: {
            paddingTop: "1em",
        },
        grid: {
            flexGrow: 1,
        },
        card: {
            boxShadow: "none",
        },
        media: {
            height: 300,
        },
        content: {
            fontSize: 16,
            padding: "1em 0",
            lineHeight: "1.25",
        },
    })()

    return (
        <Container className={classes.root} maxWidth="xl">
            {[...categories].map((category) => (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom>{category}</Typography>

                    <Grid container spacing={3}>
                        {capability_information
                            .filter((capability) => capability.category === category)
                            .map((capability) => (
                                <Grid item md={6}>
                                    <Card className={classes.card}>
                                        <Typography variant="h6">{capability.name}</Typography>
                                        <CardMedia 
                                            className={classes.media} 
                                            component="img" 
                                            alt={capability.name}
                                            image={`/images/capability/${capability.id}.jpg`}
                                        />
                                        <CardContent className={classes.content}>
                                            <Typography variant="p">{capability.descripton}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </React.Fragment>
            ))}
        </Container>
    )
}

const CapabilityPage = () => {
    const categories = new Set(capability_information.map((capability) => capability.category));

    return (
        <React.Fragment>
            <CapabilityPageHeader />
            <CapabilityPageContent categories={categories} />
        </React.Fragment>
    );
};
export default CapabilityPage;
