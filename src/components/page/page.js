import React, {Component} from 'react';
import './page.css'

import GridView from '../gridView/gridView'
import LandingView from '../landingView/landingView'

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

const RenderPage = (props) => {
    const pageType = props.pageType;
    if(pageType === "interactive"){
        return <SuggestionPage />
    } else if (pageType === "capability"){
        return <FeaturePage />
    } else if (pageType === "tools") {
        return <GridView toolType={"Hardware"}/>
    } else {
        return <LandingView />
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