import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ManagerHeader from './components/ManagerHeader.js';
import Footer from './components/Footer.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal,Container,Nav,Row,Col,Card,Popover,Button,OverlayTrigger} from "react-bootstrap";
import { MDBBtn } from 'mdbreact';
import { NavLink} from "react-router-dom";
import Timer from 'react-compound-timer'

class TimesheetSubmitted extends React.Component {  
  
render() {
   
  return (
    <div className="App">
    <Container>
      <header className="admin-header">
          <ManagerHeader />
      </header>
      <div className="contentwrapper pt-3 pb-5 mb-5">
    <div className="App">
        <div className="content">
        <div className="contentwrapper pb-5 mb-5">
          <Card className="p-3 mb-3 small_font text-center border-0">
          <img className="m-auto" alt="Success" width="10%" src={require("./components/assets/img/tick.png").default} />
          <p className="mt-2 large_font text-center"><b>Timesheet Successfully Submitted</b></p>
          <p className=" large_font text-center"><b>4/29/2016 5:00:00 PM</b></p>
          <p className="text-center">Sun Apr 24, 2016 - Sat Apr 30, 2016</p>
          <p className="text-center font-10"><b>Allen, Joe - Total Hours 40.00</b></p>
          <Nav.Link as={NavLink} to="/employee_timesheets" className="p-0">
            <MDBBtn size="md" className="button resend-btn m-auto">
            Return to Timesheets
            </MDBBtn>
          </Nav.Link>
          </Card>
          </div></div></div>  
    </div>
      </Container>
      
    </div>
  );
  }
}

export default TimesheetSubmitted;
