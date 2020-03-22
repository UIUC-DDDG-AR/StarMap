import React from 'react'
import './gridPage.css'

// Temporary function for generating mock data.
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

// Mock data
const buttonData = ["Body wearables", "Projectors", "Smart Glasses", "Head-mounted Displays", "Mobile", "Add-ons"]
const gridData = [
    {
        category: "Head-mounted Displays",
        data: [
            { title: "title1", about: "detail1", type: buttonData.sample() }, 
            { title: "title2", about: "detail2", type: buttonData.sample() }, 
            { title: "title3", about: "detail3", type: buttonData.sample() },
            { title: "title4", about: "detail4", type: buttonData.sample() },
            { title: "title5", about: "detail5", type: buttonData.sample() }]
    },
    {
        category: "Smart Glasses",
        data: [
            { title: "title1", about: "detail1", type: buttonData.sample() }, 
            { title: "title2", about: "detail2", type: buttonData.sample() }, 
            { title: "title3", about: "detail3", type: buttonData.sample() },
            { title: "title4", about: "detail4", type: buttonData.sample() },
            { title: "title5", about: "detail5", type: buttonData.sample() }]
    },
]

/* Generate a grid of cell elements
    cellList = [cell]
    cell = {
        title: String
        about: String
    }
 */
const Grid = (props) => {
    const cells = props.data.map(d =>
        <div className="cell">
            <h1>{d.title}</h1>
            <p>{d.about}</p>
            <button>Learn more</button>
        </div>
    )

    return (
        <div className="grid">{cells}</div>
    )
}

class GridPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: new Set(buttonData)
        }
    }

    updateFilter = (d) => {
        console.log(d)
        let newFilter = new Set([...this.state.filter])

        if (this.state.filter.has(d)) {
            newFilter.delete(d)
        } else {
            newFilter.add(d)
        }
        this.setState({ filter: newFilter })
    }

    render() {
        console.log(this.state.filter)
        return (
            <React.Fragment>
                <h1>{this.props.toolType} Tools</h1>

                <div className="buttonGroup">
                    {buttonData.map(d => <button onClick={this.updateFilter.bind(this, d)}>{d}</button>)}
                </div>

                <div className="GridGroup">
                    {gridData.map(cellData => 
                        <React.Fragment>
                            <h2>{cellData.category}</h2>
                            <Grid data={cellData.data.filter(d => this.state.filter.has(d.type))} />
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        )
    }
}
export default GridPage