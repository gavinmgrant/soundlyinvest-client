import React, { Component } from 'react';
import './Main.css';
import Landing from '../Landing/Landing';
import Income from '../Income/Income';
import Expenses from '../Expenses/Expenses';
import Loan from '../Loan/Loan';
import Goals from '../Goals/Goals';
import Report from '../Report/Report';
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <nav className="main">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/income" component={Income} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/loan" component={Loan} />
          <Route path="/goals" component={Goals} />
          <Route path="/report" component={Report} />
        </Switch>
      </nav>
    );
  }
}
  
export default Main;