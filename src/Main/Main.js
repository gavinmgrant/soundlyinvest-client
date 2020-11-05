import React, { Component } from 'react';
import './Main.css';
import Landing from '../Landing/Landing';
import Income from '../Income/Income';
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <nav className="main">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/income" component={Income} />
        </Switch>
      </nav>
    );
  }
}
  
export default Main;