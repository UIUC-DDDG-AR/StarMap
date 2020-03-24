import React, {Fragment} from 'react'
import './gridView.css'

// Temporary function for generating mock data.
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
};

// Mock data
const buttonData = ["Body wearables", "Projectors", "Smart Glasses", "Head-mounted Displays", "Mobile", "Add-ons"];
let buttonDataMap =  new Map(buttonData.map(data => [data, true]));

const gridData = [

    {
        category: "Head-mounted Displays",
        data: [
                { title: "title1", about: "detail1", type: buttonData.sample()},
                { title: "title2", about: "detail2", type: buttonData.sample()},
                { title: "title3", about: "detail3", type: buttonData.sample()},
                { title: "title4", about: "detail4", type: buttonData.sample()},
                { title: "title5", about: "detail5", type: buttonData.sample()}
            ]
    },
    {
        category: "Smart Glasses",
        data: [
                { title: "title1", about: "detail1", type: buttonData.sample()},
                { title: "title2", about: "detail2", type: buttonData.sample()},
                { title: "title3", about: "detail3", type: buttonData.sample()},
                { title: "title4", about: "detail4", type: buttonData.sample()},
                { title: "title5", about: "detail5", type: buttonData.sample()}
            ]
    },
];

/* Generate a grid of cell elements
    cellList = [cell]
    cell = {
        title: String
        about: String
    }
 */
const Grid = (props) => {
    const cells = props.data.map((d, idx) =>
        <div key = {idx} className="cell">
            <h1>{d.title}</h1>
            <p>{d.about}</p>
            {/*<p>{d.type}</p>*/}
            <a href="/">Learn more</a>
        </div>
    );

    return (
        <div className="grid">{cells}</div>
    );
};

class GridView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: buttonDataMap
        }
    }

    updateFilter = (d) => {
        buttonDataMap.set(d, !buttonDataMap.get(d));
        this.setState({filter: buttonDataMap});

        // I don't get it why doesn't this work?
        // this.setState(prevState => ({
        //     filter: {
        //         ...prevState.filter,
        //         [d]: !prevState.filter.get([d])
        //     }
        // }));
    };

    render() {
        const { filter } = this.state;
        return (
            <Fragment>
                <h1>{this.props.toolType} Tools</h1>

                {
                    buttonData.map((d, idx) => {
                        console.log(this.state.filter);
                        const button_state = filter.get(d) ? "active" : "inactive";
                        return <button key = {idx} className={button_state} onClick={this.updateFilter.bind(this, d)}>{d}</button>;
                    })
                }

                {
                    gridData.map((cellData, idx) =>
                        <div key = {idx}>
                            <h2>{cellData.category}</h2>
                            <Grid data={cellData.data.filter(d => filter.get(d.type))} />
                        </div>
                    )
                }
            </Fragment>
        );
    }
}
export default GridView;