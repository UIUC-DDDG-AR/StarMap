import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import NavBar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import CapabilityPage from "./pages/capabilityPage";
import InteractivePage from "./pages/interactivePage";
import UsecasePage from "./pages/usecasePage";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <NavBar />
                    <Switch>
                        <Route path="/usecase">
                            <UsecasePage />
                        </Route>
                        <Route path="/capability">
                            <CapabilityPage />
                        </Route>
                        <Route path="/interactive">
                            <InteractivePage />
                        </Route>
                        <Route path="/">
                            <LandingPage />
                        </Route>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
        );
    }
}
export default App;
