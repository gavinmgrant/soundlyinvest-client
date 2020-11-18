import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './Main.css';
import Landing from '../Landing/Landing';
import Income from '../Income/Income';
import Expenses from '../Expenses/Expenses';
import Purchase from '../Purchase/Purchase';
import Report from '../Report/Report';
import Reports from '../Reports/Reports';
import SavedReport from '../SavedReport/SavedReport';
import EditReport from '../EditReport/EditReport';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/income" component={Income} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/report" component={Report} />
          <Route exact path="/reports" component={Reports} />
          <Route path="/reports/:id/" component={SavedReport} />
          <Route path="/edit-report/:id/" component={EditReport} />
        </Switch>
      </div>
    );
  }
}
  
export default Main;