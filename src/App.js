import React, { Component, Fragment} from 'react';
import Header from "./components/header/header";
import Page from "./components/page/page";

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page:"landing"
    }
  };
  onClick = (page) =>{
    this.setState({page});
  };

  render(){
    console.log(this.state.page);
    return(
      <Fragment>
        <Header onClick = {this.onClick}/>
        <Page page = {this.state.page} />
      </Fragment>
    );
  }

}

export default App;
