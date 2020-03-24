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
    const pageType = props.pageType;
    if(pageType === "interactive"){
        return <SuggestionPage />
    } else if (pageType === "features"){
        return <FeaturePage />
    } else if (pageType === "tools") {
        return <GridView toolType={"Hardware"}/>
    } else {
        return <LandingPage />
    }
};

class Page extends Component {
    render() {
        return (
            <div className="page">
                <RenderPage pageType={this.props.pageType} />
            </div>
        );
    }
}


export default Page;