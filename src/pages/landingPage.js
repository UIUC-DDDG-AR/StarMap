import React, { Fragment } from "react";

import Card from "../components/card";
import Logo from "../logo.svg";

const LandingPage = () => {
    return (
        <Fragment>
            <div className="header">
            <img src="/images/NavStar.png"></img>
                <img src="/images/Stars.png"></img>
                <div className="landinghead">
                <h1>
                    Find the right tools for your augmented reality project.
                </h1>
                </div>
            </div>
            <div className="body">
                <Card orient="horizontal" title="What is StarMap?" img={Logo}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis orci a scelerisque purus semper.
                        Aliquet sagittis id consectetur purus ut faucibus
                        pulvinar elementum. Eu tincidunt tortor aliquam nulla.
                        Pharetra magna ac placerat vestibulum lectus. Sagittis
                        aliquam malesuada bibendum arcu.
                    </p>
                </Card>
                <Card orient="mirror" title="What is StarMap?" img={Logo}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis orci a scelerisque purus semper.
                        Aliquet sagittis id consectetur purus ut faucibus
                        pulvinar elementum. Eu tincidunt tortor aliquam nulla.
                        Pharetra magna ac placerat vestibulum lectus. Sagittis
                        aliquam malesuada bibendum arcu.
                    </p>
                </Card>
                <Card orient="horizontal" title="What is StarMap?" img={Logo}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis orci a scelerisque purus semper.
                        Aliquet sagittis id consectetur purus ut faucibus
                        pulvinar elementum. Eu tincidunt tortor aliquam nulla.
                        Pharetra magna ac placerat vestibulum lectus. Sagittis
                        aliquam malesuada bibendum arcu.
                    </p>
                </Card>
            </div>
        </Fragment>
    );
};
export default LandingPage;
