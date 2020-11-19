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
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LogInForm from '../LogInForm/LogInForm';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <PrivateRoute path="/income" component={Income} />
          <PrivateRoute path="/expenses" component={Expenses} />
          <PrivateRoute path="/purchase" component={Purchase} />
          <PrivateRoute path="/report" component={Report} />
          <PrivateRoute exact path="/reports" component={Reports} />
          <PrivateRoute path="/reports/:id/" component={SavedReport} />
          <PrivateRoute path="/edit-report/:id/" component={EditReport} />
          <PublicOnlyRoute path="/register" component={RegistrationForm} />
          <PublicOnlyRoute path="/login" component={LogInForm} />
        </Switch>
      </div>
    );
  }
}
  
export default Main;