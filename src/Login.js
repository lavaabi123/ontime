import React from 'react';
import Logo from './components/assets/img/login-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/css/login.css';
import 'font-awesome/css/font-awesome.css';
import {Nav} from 'react-bootstrap';
import { NavLink} from "react-router-dom";


class Login extends React.Component {
  onSubmit = (e) => {      
      this.props.history.push("/ManagerOrganization");
  }
	render() {
  return (
    <div className="background h-100">
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center m-0">
      <div className="col-12 my-6"> 
          <div className="login-form text-center col-lg-4 col-md-5 col-sm-9">  
              <img src={Logo} width="86%" alt="Logo"/>
              <img alt="Banner" width="15%" src={require("./components/assets/img/time-icon.png").default} />
              <p className="font-weight-bold font-11 mb-2">OnTime, The Timesheet Solution</p>
              <p className="font-11 mb-2">Administrator Login</p>
              <form onSubmit= { this.onSubmit }>
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Login Name" />
              </div>
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password" />
              </div>
              <p className="small_font float-left px-1"><input type="checkbox" defaultChecked className="form-control w-auto float-left mt-1"/><label className="remember">Remember</label></p>
              <Nav.Link as={NavLink} to="/ForgotPassword" className="small_font float-right text-decoration-underline blue-color p-0">
                Forgot Password?
              </Nav.Link>
              <input type="submit" className="button w-100 py-2"  value="Login"/>
              </form>
              <p className="xs_font light_color px-2 mt-3 mb-0">By continuing, you're confirming that you've read our <a href="!#" className="text-decoration-underline blue-color">Terms & Conditions</a> and <a href="!#" className="text-decoration-underline blue-color">Cookie Policy</a></p>
          </div>
          <p className="col-12 text-center xs_font light_color px-2 mt-2 mb-0">(c) 2016 WizDepot. All Rights Reserved</p>
          <p className="col-12 text-center font-11 px-2 mt-3">Don't have an account?<a href="!#" className="blue-color px-3">Sign Up</a></p>
          </div>  
    </div>  
  </div></div>
  );
  }
}

export default Login;
