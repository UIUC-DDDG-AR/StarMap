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

import software_documentation from "../data/software_documentation"
import hardware_documentation from "../data/hardware_documentation"
import software_capability from "../data/software_capability"
import hardware_capability from "../data/hardware_capability"

const useStyles = makeStyles({
    header: {
        paddingTop: "4em",
        background: "#011140",
        color: "white",
    },
    container: {
        padding: "1em 0",
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
        height: 200,
        objectFit: "contain",
    },
    content: {
        fontSize: 16,
        padding: "1em",
        lineHeight: "1.25",
    },
    button: {
        fontWeight: 700,
    },
    dialogKey: {
        textTransform: "capitalize",
        fontWeight: 700,
    },
});

const MAX_DESC_LEN = 100

const ToolsPage = ({ tab, chips, checkbox }) => {
    const classes = useStyles();
    const doc = tab ? software_documentation : hardware_documentation
    const cap = tab ? software_capability : hardware_capability

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

    const getTools = () => {
        if (chips.length || checkbox.length) {
            let newDoc = doc;
            if (chips.length) {
                // TODO: filter result based on selected chips
                newDoc = newDoc.filter((tool, idx) => chips.includes(tool.category))
            }
            if (checkbox.length) {
                newDoc = newDoc.filter((tool, idx) =>
                    checkbox.length === checkbox.filter(checked => cap[idx][checked][0]).length)
            }
            return newDoc
        } else {
            return doc
        }
    }

    return (
        <React.Fragment>
            <Dialog open={dialog.open} onClose={handleClose} scroll="body">
                <DialogTitle>{dialog.tool.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Object.entries(dialog.tool).map(([key, value]) => (
                            <div>
                                <span className={classes.dialogKey}>{key.replace(/_/g, " ")}</span>
                                {": "}
                                {Array.isArray(value) ? value.join(', ') : value}
                            </div>
                        ))}
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Container className={classes.container}>
                <Grid container spacing={2}>
                    {getTools().map((tool) => (
                        <Grid item md={6}>
                            <Card className={classes.card} variant="outlined">
                                <h3 className={classes.title}>{tool.name}</h3>

                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    alt={tool.name}
                                    image={`/images/${tab ? "software" : "hardware"}/${tool.id}.${tab ? "png" : "jpg"}`}
                                />

                                <CardContent className={classes.content}>
                                    {tool.description.slice(0, MAX_DESC_LEN)}
                                    {tool.description.length > MAX_DESC_LEN ? "......" : ""}
                                </CardContent>

                                <CardActions>
                                    <Button
                                        className={classes.button}
                                        variant="outlined"
                                        size="medium"
                                        color="default"
                                        onClick={handleOpen.bind(this, tool)}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default ToolsPage;