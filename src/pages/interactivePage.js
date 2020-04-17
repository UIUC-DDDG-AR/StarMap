import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography"

import Result from "../components/result";
import Chip from "../components/chip";

import capability_information from "../data/capability_information";
import software_capability from "../data/software_capability"
import hardware_capability from "../data/hardware_capability"
import software_documentation from "../data/software_documentation"
import hardware_documentation from "../data/hardware_documentation"

const useStyles = makeStyles({
    capitalize: {
        textTransform: "capitalize",
    },
    resultsHeader: {
        fontSize: 18,
        fontWeight: 700,
        borderBottom: "1px black solid",
        padding: "13px 0",
        marginBottom: "1em",
    },
});

const ExpansionPanel = withStyles({
    root: {
        fontSize: 18,
        fontWeight: 700,
        border: "none",
        borderBottom: "1px black solid",
        boxShadow: "none",
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        padding: 0,
    },
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: 0,
        display: "flex",
        flexDirection: "column",
    },
}))(MuiExpansionPanelDetails);

const InteractivePageHeader = () => {
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
                <Typography variant="h4">Augmented Reality Tools Suggestion</Typography>
            </Container>
        </div>
    )
}

const InteractivePage = () => {
    const classes = useStyles();
    const [chips, setChips] = React.useState([]);
    const [tab, setTab] = React.useState(0);
    const [checkbox, setCheckbox] = React.useState([]);

    const handleTab = (event, newtab) => {
        setTab(newtab);
        setCheckbox([])
        setChips([])
    };

    const handleChip = (chip) => {
        const newChips = [...chips, chip];
        setChips(newChips);
    };

    const handleUnchip = (chip) => {
        const newChips = chips.filter((x) => x !== chip);
        setChips(newChips);
    };

    const handleCheckbox = (event) => {
        const checked = event.target.name
        if (checkbox.includes(checked)) {
            setCheckbox(checkbox.filter(x => x !== checked));
        } else {
            setCheckbox([...checkbox, checked]);
        }
    }

    const capabilityCategoryLabels = new Set(
        capability_information.map((c) => c.category)
    );

    const softwareCategoryLabels = new Set(
        software_documentation.map((c) => c.category)
    )

    const hardwareCategoryLabels = new Set(
        hardware_documentation.map((c) => c.category)
    )

    const cap = tab ? software_capability : hardware_capability
    const avaliableKeys = Object.keys(cap[0])
    const chipLabels = tab ? softwareCategoryLabels : hardwareCategoryLabels

    return (
        <React.Fragment>
            <InteractivePageHeader />

            <Container maxWidth="xl">
                <Tabs
                    value={tab}
                    indicatorColor="secondary"
                    textColor="primary"
                    onChange={handleTab}
                >
                    <Tab label={<Typography className={classes.capitalize} variant="h5">Hardware Tools</Typography>} />
                    <Tab label={<Typography className={classes.capitalize} variant="h5">Software Tools</Typography>} />
                </Tabs>
            </Container>

            <Container maxWidth="xl">
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={3}>
                        {[...capabilityCategoryLabels].map((label) => (
                            <ExpansionPanel defaultExpanded square>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={label}
                                    id={label}
                                >
                                    {label}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {capability_information
                                        .filter(info => info.category === label && avaliableKeys.includes(info.id))
                                        .map((info) =>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name={info.id}
                                                        checked={checkbox.includes(info.id)}
                                                        onChange={handleCheckbox}
                                                        color="default" />}
                                                label={info.name}
                                            />)}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <div className={classes.resultsHeader}>
                            <span>Results</span>
                        </div>

                        {[...chipLabels].map((label) => {
                            return (
                                <Chip
                                    state={chips.includes(label) ? "active" : "inactive"}
                                    onClick={handleChip.bind(this, label)}
                                    onDelete={handleUnchip.bind(this, label)}
                                >
                                    {label}
                                </Chip>
                            );
                        })}

                        <Result tab={tab} chips={chips} checkbox={checkbox} />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default InteractivePage;