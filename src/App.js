import React from "react";

import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Page from "./components/page/page";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: "landing",
    };
  }

  updatePageType = pageType => {
    this.setState({ pageType });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar updatePageType={this.updatePageType} />
        <Header pageType={this.state.pageType} updatePageType={this.updatePageType}/>
        <Page pageType={this.state.pageType} />
      </React.Fragment>
    );
  }
}

export default App;
