import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';

class AccountCreated extends React.Component {
	render() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
      </header>
      <Container>
        <div className="content">          
          <div className="account_success_message width-70">
            <h3 className="xl_font">Jesse, your account for Company will be created after activation process is completed.</h3>
            <h5 className="large_font mb-1">Please follow the instructions to verify your email.</h5>
          </div>
          <div className="account_success_message width-70 float-left">
          <div className="border border-blue py-3 px-2 row m-0 mt-3">
            <div className="col-1 float-left p-1"><img width="100%" src={require("./components/assets/img/tick.png").default} alt="" /></div>
            <div className="col-11 float-right pl-2">
            <p className="large_font mb-0">We just sent you and email</p>
            <p className="small_font mb-0">The next step is to verify your email address. Check your inbox for the confirmation email.</p>
            </div>
          </div>
          <div className="border border-blue py-3 px-2 row m-0 mt-3">
            <div className="col-1 float-left p-1"><img width="100%" src={require("./components/assets/img/warning.png").default} alt="" /></div>
            <div className="col-11 float-right pl-2">
            <p className="large_font mb-0">Cant find the confirmation email?</p>
            <p className="small_font mb-0">Check your spam folder. If you still can't find it please <a href="!#">contact our support team</a> or resend</p>
            <input type="text" className="form-control col-lg-8 col-md-8 col-sm-12 col-xl-8 mt-3 float-left" placeholder="Enter email address" />
            <input type="submit" className="button col-lg-3 col-md-3 col-sm-12 col-xl-3 resend-btn"  value="Resend"/>
            </div>
          </div>
          </div>
          <div className="width-30 float-right right-sidebar mt-2 mb-5">
                <p>Stay up to date with the latest WizDepot news.</p>
                <img className="mr-2 mt-1" src={require("./components/assets/img/fb.png").default} width="22%" alt="Logo"/>
                <img className="mr-2 mt-1" src={require("./components/assets/img/twitter.png").default} width="22%" alt="Logo"/>
                <img className="mr-2 mt-1" src={require("./components/assets/img/linkedin.png").default} width="22%" alt="Logo"/>
                <img className="mt-1" src={require("./components/assets/img/youtube.png").default} width="22%" alt="Logo"/>
          </div>
        </div>
      </Container>
    </div>
  );
  }
}

export default AccountCreated;
