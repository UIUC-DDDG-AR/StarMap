import React, { Fragment } from "react";

import Card from "../card/card";
import Logo from "../../logo.svg";

const LandingPage = () => {
    return (
        <Fragment>
            <Card orient="horizontal" title="What is StarMap?" img={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </Card>
            <Card orient="mirror" title="What is StarMap?" img={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </Card>
            <Card orient="horizontal" title="What is StarMap?" img={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </Card>
        </Fragment>
    );
};
export default LandingPage;
