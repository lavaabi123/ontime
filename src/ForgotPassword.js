import React from 'react';
import Logo from './components/assets/img/login-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/css/login.css';
import 'font-awesome/css/font-awesome.css';

class ForgotPassword extends React.Component {
  onSubmit = (e) => {      
      this.props.history.push("/Login");
  }
	render() {
  return (
    <div className="background h-100">
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center m-0">
      <div className="col-12 forgot-margin"> 
          <div className="login-form text-center col-lg-4 col-md-5 col-sm-9">  
              <img src={Logo} width="86%" alt="Logo"/>
              <img alt="Banner" width="15%" src={require("./components/assets/img/time-icon.png").default} />
              <p className="font-weight-bold font-11 mb-2">Reset Password</p>
              <p className="font-10 mb-2">Enter Your Email Address below to have instructions to reset your password sent to your</p>
              <form onSubmit= { this.onSubmit }>
              <div className="input-group my-3">
                  <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Email Address" />
              </div>
              <input type="submit" className="button w-100 py-2 mb-3"  value="Send Instructions"/>
              </form>
          </div>
          </div>  
    </div>  
  </div></div>
  );
  }
}

export default ForgotPassword;
