import React, {Component} from 'react';
import './page.css'

import GridView from '../gridView/gridView'
import LandingPage from '../landingPage/landingPage'
import CapabilityPage from '../capabilityPage/capabilityPage'

const RenderPage = (props) => {
    const pageType = props.pageType;
    if(pageType === "interactive"){
        return null
    } else if (pageType === "capability"){
        return <CapabilityPage />
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