import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography"

const PageHeader = (props) => {
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
                <Typography variant="h4">{props.children}</Typography>
            </Container>
        </div>
    )
}
export default PageHeader;