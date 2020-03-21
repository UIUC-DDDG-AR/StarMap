import React, {Component} from 'react';

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

class Page extends Component {

    render() {
        const {page} = this.props;

        let renderPage;
        if(page === "suggestions"){
            renderPage = <SuggestionPage />
        } else if (page === "features"){
            renderPage = <FeaturePage />
        } else {
            renderPage = <LandingPage />
        }

        return (
            <div>
                {renderPage}
            </div>
        );
    }
}


export default Page;