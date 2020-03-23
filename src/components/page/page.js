import React, {Component} from 'react';
import './page.css'
import GridView from '../gridView/gridView'

const SuggestionPage = () => {
    return (
        <h1> Suggestions Page</h1>
    );
};

const FeaturePage = () => {
    return (
        <h1> Features Page </h1>
    );

};

const LandingPage = () => {
    return (
        <h1> Landing Page </h1>
    );
};

const RenderPage = (props) => {
    const page = props.page
    if(page === "suggestions"){
        return <SuggestionPage />
    } else if (page === "features"){
        return <FeaturePage />
    } else if (page === "documentation") {
        return <GridView toolType={"Hardware"}/>
    } else {
        return <LandingPage />
    }

}

class Page extends Component {
    render() {
        return (
            <div className="page">
                <RenderPage page={this.props.page} />
            </div>
        );
    }
}


export default Page;