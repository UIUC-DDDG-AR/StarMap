import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles({
    header: {
        paddingTop: "4em",
        background: "#011140",
        color: "white",
    },
    container: {
        padding: "1em",
    },
    grid: {
        flexGrow: 1,
    },
    card: {
        boxShadow: "none",
    },
    title: {
        padding: "0 1em",
    },
    media: {
        height: 300,
        margin: "0 1em",
    },
    content: {
        fontSize: 14,
        padding: "1em",
    },
    button: {
        fontWeight: 700,
    },
    dialogKey: {
        textTransform: "capitalize",
        fontWeight: 700,
    },
});

const ToolsPage = (props) => {
    const classes = useStyles();
    const documentation = props.tab
        ? require("../data/software_documentation")
        : require("../data/hardware_documentation");

    const [dialog, setDialog] = React.useState({
        open: false,
        tool: { name: "" },
    });

    const handleOpen = (tool) => {
        setDialog({ open: true, tool: tool });
    };

    const handleClose = () => {
        setDialog({ ...dialog, open: false });
    };
    return (
        <React.Fragment>
            <Dialog open={dialog.open} onClose={handleClose} scroll="body">
                <DialogTitle>{dialog.tool.name.replace(/_/g, " ")}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Object.entries(dialog.tool).map(([key, value]) => (
                            <div>
                                <div>
                                    <span className={classes.dialogKey}>
                                        {key.replace(/_/g, " ")}
                                    </span>
                                    {": "}
                                    {value}
                                </div>
                            </div>
                        ))}
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {documentation.map((tool) => {
                        return (
                            <Grid item xs={6}>
                                <Card
                                    className={classes.card}
                                    variant="outlined"
                                >
                                    <h2 className={classes.title}>
                                        {tool.name.replace(/_/g, " ")}
                                    </h2>

                                    <CardMedia
                                        className={classes.media}
                                        image={`/images/${
                                            props.tab ? "software" : "hardware"
                                        }/${tool.name.toLowerCase()}.${
                                            props.tab ? "png" : "jpg"
                                        }`}
                                    />

                                    <CardContent className={classes.content}>
                                        {tool.description.slice(0, 150)}
                                        {tool.description.length > 150
                                            ? "......"
                                            : ""}
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            className={classes.button}
                                            variant="outlined"
                                            size="medium"
                                            color="default"
                                            onClick={handleOpen.bind(
                                                this,
                                                tool
                                            )}
                                        >
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default ToolsPage;