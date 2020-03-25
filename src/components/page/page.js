import React from 'react';
import './page.css'

import LandingPage from '../landingPage/landingPage'
import CapabilityPage from '../capabilityPage/capabilityPage'
import ToolsPage from '../toolsPage/toolsPage'

const Page = (props) => {
    const pageType = props.pageType;
    let renderPage;
    if(pageType === "interactive"){

    } else if (pageType === "capability"){
        renderPage = <CapabilityPage />
    } else if (pageType === "tools") {
        renderPage = <ToolsPage toolType={"Hardware"}/>
    } else {
        renderPage = <LandingPage />
    }

    return (
        <div className="page">
            {renderPage}
        </div>
    )
}
export default Page;