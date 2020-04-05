import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Result from "../components/result";
import Chip from "../components/chip";
import "./interactivePage.css";

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
    }
});

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

    const handleChange = (event, newtab) => {
        setTab(newtab);
    };
    const handleClick = (data) => {
        const newChips = [...chips, data];
        setChips(newChips);
    };

    const handleDelete = (data) => {
        const newChips = chips.filter((chip) => chip !== data);
        setChips(newChips);
    };

    const handleAccordion = (id) => {
        let panel = document.getElementById(id);
        if (panel) {
            panel.classList.toggle("panel-active");
        }
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
                    onChange={handleChange}
                >
                    <Tab className={classes.tab} label="Hardware Tools" />
                    <Tab className={classes.tab}  label="Software Tools" />
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

                        <div className="search-categories">
                            {arr.map((element) => (
                                <div>
                                    <div
                                        className="accordion"
                                        onClick={handleAccordion.bind(
                                            this,
                                            element
                                        )}
                                    >
                                        <span>{element}</span>
                                    </div>

                                    <div id={element} className="panel">
                                        <ul>
                                            {Capability[element].map((data) => (
                                                <li key={data.title}>
                                                    <input type="checkbox" />{" "}
                                                    {data.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Grid>

                    <Grid item xs={9}>
                        <Container>
                            {categories.map((data) => {
                                return (
                                    <Chip
                                        state={
                                            chips.includes(data)
                                                ? "active"
                                                : "inactive"
                                        }
                                        onClick={handleClick.bind(this, data)}
                                        onDelete={handleDelete.bind(this, data)}
                                    >
                                        {data}
                                    </Chip>
                                );
                            })}
                            <Result tab={tab}/>
                        </Container>
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
