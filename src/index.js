import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AccountCreated from './AccountCreated';
import Login from './Login';
import Manager from './Manager';
import Organization from './Organization';
import Activities from './Activities';
import Policies from './Policies';
import Employees from './Employees';
import MyProfile from './MyProfile';
import Timesheets from './Timesheets';
import Reporting from './Reporting';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import ManagerOrganization from './ManagerOrganization';
import TimesheetChart from './TimesheetChart.js';
import MyEmployees from './MyEmployees.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import EmployeeTimesheetDetail from './EmployeeTimesheetDetail.js';
import EmployeeProfile from './EmployeeProfile';

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
          path="/EmployeeProfile"
          render={(props) => <EmployeeProfile {...props} />}
        />
        <Route
          path="/timesheets"
          render={(props) => <Timesheets {...props} />}
          />
        <Route  
          path="/reporting"
          render={(props) => <Reporting {...props} />}
        />
        <Route  
          path="/ForgotPassword"
          render={(props) => <ForgotPassword {...props} />}
        />
        <Route  
          path="/Dashboard"
          render={(props) => <Dashboard {...props} />}
        />
        <Route  
          path="/TimesheetChart"
          render={(props) => <TimesheetChart {...props} />}
        />
        <Route  
          path="/employee_timesheets"
          render={(props) => <ManagerOrganization {...props} />}
        />
        <Route  
          path="/MyEmployees"
          render={(props) => <MyEmployees {...props} />}
        />
        <Route  
          path="/EmployeeTimesheetDetail"
          render={(props) => <EmployeeTimesheetDetail {...props} />}
        />
        <Route
          path="/employee"
          render={(props) => <Manager {...props} />}
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
