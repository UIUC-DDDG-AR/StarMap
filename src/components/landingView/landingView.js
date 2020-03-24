import React, { Fragment } from "react";
import "./landingView.css";

import CardView from "../cardView/cardView";
import Logo from "../../logo.svg";

const LandingView = () => {
    return (
        <Fragment>
            <CardView title="What is StarMap?" src={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </CardView>
            <CardView title="What is StarMap?" src={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </CardView>
            <CardView title="What is StarMap?" src={Logo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sagittis orci a scelerisque purus semper. Aliquet
                    sagittis id consectetur purus ut faucibus pulvinar
                    elementum. Eu tincidunt tortor aliquam nulla. Pharetra magna
                    ac placerat vestibulum lectus. Sagittis aliquam malesuada
                    bibendum arcu.
                </p>
            </CardView>
        </Fragment>
    );
}
export default LandingView;
