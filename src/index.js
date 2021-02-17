import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AccountCreated from './AccountCreated';
import Login from './Login';
import Organization from './Organization';
import Activities from './Activities';
import Policies from './Policies';
import Employees from './Employees';
import MyProfile from './MyProfile';
import Timesheets from './Timesheets';
import Reporting from './Reporting';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
  <Switch>
    <Route
          path="/index"
          render={(props) => <App {...props} />}
        />
    <Route
          path="/account_created"
          render={(props) => <AccountCreated {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/organization"
          render={(props) => <Organization {...props} />}
        />
        <Route
          path="/activities"
          render={(props) => <Activities {...props} />}
        />
        <Route
          path="/policies"
          render={(props) => <Policies {...props} />}
        />
        <Route
          path="/employees"
          render={(props) => <Employees {...props} />}
        />
        <Route
          path="/MyProfile"
          render={(props) => <MyProfile {...props} />}
        />
        <Route
          path="/timesheets"
          render={(props) => <Timesheets {...props} />}
          />
        <Route  
          path="/reporting"
          render={(props) => <Reporting {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
