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

import Capability from "../data/capability";

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
    /*   
    handleCheckbox(label) {
        if (this.state.checkboxes.includes(label)) {
            this.setState({
                checkboxes: this.state.checkboxes.filter(
                    checkbox => checkbox !== label
                )
            });
        } else {
            this.setState({ checkboxes: [...this.state.checkboxes, label] });
        }
    }
    */

    const classes = useStyles();
    const [chips, setChips] = React.useState([]);
    const [tab, setTab] = React.useState(0);

    const handleTab = (event, newtab) => {
        setTab(newtab);
    };
    const handleChip = (data) => {
        const newChips = [...chips, data];
        setChips(newChips);
    };

    const handleUnchip = (data) => {
        const newChips = chips.filter((chip) => chip !== data);
        setChips(newChips);
    };

    var arr = [];

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
                        <div>
                            {Object.keys(Capability).forEach(function (
                                element
                            ) {
                                arr.push(element);
                            })}
                        </div>

                        <div>
                            {arr.map((element) => (
                                <ExpansionPanel defaultExpanded square>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={element}
                                        id={element}
                                    >
                                        {element}
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {Capability[element].map((data) => (
                                            <div>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name={data.title}
                                                            color="default"
                                                        />
                                                    }
                                                    label={data.title}
                                                />
                                            </div>
                                        ))}
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}
                        </div>
                    </Grid>

                    <Grid item xs={9}>
                        <Container>
                            <div className={classes.resultsHeader}>
                                <span>Results</span>
                            </div>

                            {categories.map((data) => {
                                return (
                                    <Chip
                                        state={
                                            chips.includes(data)
                                                ? "active"
                                                : "inactive"
                                        }
                                        onClick={handleChip.bind(this, data)}
                                        onDelete={handleUnchip.bind(this, data)}
                                    >
                                        {data}
                                    </Chip>
                                );
                            })}
                        </Container>
                        <Result tab={tab} />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default InteractivePage;

const categories = [
    "Body wearables",
    "Projectors",
    "Smart Glasses",
    "Head-mounted Displays",
    "Mobile",
    "Add-ons",
];
