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

import Result from "../components/result";
import Chip from "../components/chip";

import capability_information from "../data/capability_information";
import software_capability from "../data/software_capability"
import hardware_capability from "../data/hardware_capability"
import software_documentation from "../data/software_documentation"
import hardware_documentation from "../data/hardware_documentation"

const useStyles = makeStyles({
    header: {
        paddingTop: "4em",
        background: "#011140",
        color: "white",
    },
    container: {
        padding: "1em 5vw",
    },
    tab: {
        color: "black",
        fontWeight: 900,
        fontSize: 24,
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
            <div className={classes.header}>
                <Container className={classes.container}>
                    <h1>Interactive Thing</h1>
                </Container>
            </div>

            <Container className={classes.container}>
                <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleTab}
                >
                    <Tab className={classes.tab} label="Hardware Tools" />
                    <Tab className={classes.tab} label="Software Tools" />
                </Tabs>
            </Container>

            <Container className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
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

                    <Grid item xs={9}>
                        <Container>
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
                        </Container>

                        <Result tab={tab} chips={chips} checkbox={checkbox} />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default InteractivePage;