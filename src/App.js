import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/navbar";

import LandingPage from './pages/landingPage'
import CapabilityPage from './pages/capabilityPage'
import ToolsPage from './pages/toolsPage'

import "./App.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route path="/tools">
                            <ToolsPage/>
                        </Route>
                        <Route path="/capability">
                            <CapabilityPage />
                        </Route>
                        <Route path="/">
                            <LandingPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Fragment>

        );
    }
}

export default App;
