import React, { Component, Fragment } from "react";
import "./toolsPage.css";

import Card from "../card/card";
import Logo from "../../logo.svg";

const Grid = props => {
    const cells = props.data.map((data, idx) => (
        <Card
            orient="vertical"
            extra="border"
            title={data.title}
            img={data.img}
        >
            {data.text}
            <div className="learnmore">
                <a href="/">Learn more</a>
            </div>
        </Card>
    ));

    return <div className="grid">{cells}</div>;
};

class ToolsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: new Map(buttonData.map(data => [data, true]))
        };
    }

    updateFilter = d => {
        this.state.filter.set(d, !this.state.filter.get(d));
        this.setState({ filter: this.state.filter });
    };

    render() {
        return (
            <Fragment>
                <h1>{this.props.toolType} Tools</h1>

                {buttonData.map(data => {
                    const button_state = this.state.filter.get(data)? "active": "";
                    return (
                        <button
                            className={button_state}
                            onClick={this.updateFilter.bind(this, data)}
                        >
                            {data}
                        </button>
                    );
                })}

                {pageData.map(categoryData => (
                    <div>
                        <h2>{categoryData.category}</h2>
                        <Grid
                            data={categoryData.data.filter(d =>
                                this.state.filter.get(d.type)
                            )}
                        />
                    </div>
                ))}
            </Fragment>
        );
    }
}
export default ToolsPage;

// Temporary function for generating mock data.
Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
};

// Mock data
const buttonData = [
    "Body wearables",
    "Projectors",
    "Smart Glasses",
    "Head-mounted Displays",
    "Mobile",
    "Add-ons"
];

const gridText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
const pageData = [
    {
        category: "Head-mounted Displays",
        data: [
            {
                title: "title1",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title2",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title3",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title4",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title5",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title6",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title7",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title8",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title9",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            }
        ]
    },
    {
        category: "Smart Glasses",
        data: [
            {
                title: "title1",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title2",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title3",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title4",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title5",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title6",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title7",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title8",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title9",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            }
        ]
    }
];
