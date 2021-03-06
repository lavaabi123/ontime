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

class EmployeeTimesheetDetail extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      punch: false,
      startTime: '',
      weeklyDate: null,
    };
  } 
  handleChange = (date) => {
    this.setState({
      startTime: date
    })
  }
  isWeekday = (date) => {
      const day = date.getDay()
      return day === 0
  }
render() {
  const popover = (
    <Popover id={`popover-positioned-top`} className="timesheetpopover">
      <Popover.Title as="h6" className="background-green1 text-white">
        <span className="small_font">Allen, Joe</span>
        <span className="small_font">Sun Apr 15, 2016</span>
        <span aria-label="Close" className="float-right icon-button cursor-pointer" 
        onClick={() => document.body.click()}>x</span>
      </Popover.Title>
      <Popover.Content>
      <div className="row px-3">
      <label className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 permission-label">Type : </label>
      <label className="col-xl-6 col-lg-6 col-md-6 col-sm-10 p-0 permission-label">Punch Out</label>
      </div>
      <div className="row px-3">
      <label className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 permission-label">Time : </label>
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 p-0">
      <DatePicker
        selected={this.state.startTime}
        onChange={this.handleChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time" className="form-control"
        dateFormat="h:mm aa"
      /> 
      </div>  
      <i className="col-xl-1 col-lg-1 col-md-1 mt-auto mb-auto fa fa-clock-o text-danger"></i>                          
      </div>
      <div className="row px-3">
      <label className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 permission-label"></label>
      <label className="xs_font col-xl-8 col-lg-8 col-md-8 col-sm-10 p-0 permission-label">Actual Time : 04/25/2020 5:15PM</label>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
        <textarea className="form-control" placeholder="Note for reason for change(required)"></textarea>
      </div>
      <p className="xs_font mt-2 text-center">If there is support document, please<span className="link-style text-decoration-underline">upload</span></p>
      <div class="row mt-2">
        <div className="col-6"><button className="button resend-btn background-red px-2 float-left">Delete Punch</button></div>
        <div className="col-6"><button className="button resend-btn float-right px-4">Save</button></div>
      </div>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className="App">
      <Container>   
        <header className="admin-header">
            <ManagerHeader />
        </header>
        <div className="content">
        <div className="contentwrapper pb-5 mb-5">
        <ul class="pl-0">
            <Nav.Link as={NavLink} to="/timesheets" className="p-0">
               <button onClick={() => this.setState({ editshow: false })} class="button resend-btn py-2 px-4 m-0 mr-2">Back</button>
            </Nav.Link>
        </ul>
          <Card className="p-3 mb-3 small_font bg-amber border-0">
            <Row>
              <Col lg="5" md="5" sm="12">
                <div className="">
                  <span className="pr-3 font-weight-bold font-16">Allen, Joe</span>
                  <span className="pr-3 chart-text">98.9%</span>
                  <span className="pr-3 small-font">Attendance Rate</span>
                </div>
              </Col>
              <Col lg="4" md="4" sm="12">
                <div className="form-group row mb-0">
                  <label className="col-xl-4 col-lg-4 col-md-4 col-sm-10 act-text px-0">Week Started</label>
                  <DatePicker  selected={this.state.weeklyDate} onChange={date => this.setState({weeklyDate: date})}  
                    name="startDate" className="form-control ml-3 col-xl-9 col-lg-9 col-md-9 col-sm-10" 
                    filterDate={this.isWeekday} dateFormat="MM/dd/yyyy"/>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="form-group row mb-0">
                  <label className="col-xl-3 col-lg-3 col-md-3 col-sm-10 act-text px-0">Employee</label>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-10">
                      <select placeholder="Select" className="form-control" name="state">
                          <option>Today</option>
                          <option>Bi-Weekly</option>
                      </select>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col lg="12" md="12" sm="12">
              <table border='1' className="col-12 text-center text-black">
                    <thead>
                        <tr>
                            <th colSpan='3' className="blue-head">Joe Allen's Accumulated Time</th>
                        </tr>
                        <tr>
                            <th rowSpan='2'>Week (April-24, 2020 - April-30, 2020)</th>
                            <th rowSpan='2'>Current Bi-Week Period (April-17, 2020 - April-30, 2020)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="blue-num">
                            <td className="font-weight-bold">36.5 Hrs</td>
                            <td className="font-weight-bold">76.5 Hrs</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
          </Row>
          <div className="mt-3">
            <table border='1' className="col-12 text-black">
                <thead>
                    <tr>
                        <th colSpan='17' className="blue-head py-2">
                          <Row>
                            <Col lg="6" md="6" sm="12">
                              <div className="pl-2 float-left">
                                <span className="font-16">WEEKLY TIME SHEET</span>
                                <span className="small-font pl-2">April-24, 2020 - April-30, 2020</span>
                              </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                              <div className="pr-2 pt-2 float-right">
                                <span className="pr-2 font-16">Active</span>
                                <span className="font-small">Due on : April 29, 2020</span>
                                <span className="px-1">|</span>
                                <i className="fa fa-print px-1"></i>
                                <i className="fa fa-file-pdf-o px-1"></i>
                              </div>
                            </Col>
                          </Row>
                        </th>
                    </tr>
                    <tr>
                      <th colSpan='2' className="font-weight-bold text-right pr-1">NAME:</th>
                      <th colSpan='15' className="pl-1">ALLEN, JOE</th>
                    </tr>
                    <tr>
                      <th colSpan='2' className="font-weight-bold text-right pr-1">GROUP:</th>
                      <th colSpan='15' className="pl-1">GROUP NAME OR ID</th>
                    </tr>
                    <tr className="text-center font-small p-1 bg-lite-gray">
                        <th colSpan='2'></th>
                        <th colSpan='2'>Sun<br />Apr 24, 2020</th>
                        <th colSpan='2'>Mon<br />Apr 25, 2020</th>
                        <th colSpan='2'>Tue<br />Apr 26, 2020</th>
                        <th colSpan='2'>Wed<br />Apr 27, 2020</th>
                        <th colSpan='2'>Thu<br />Apr 28, 2020</th>
                        <th colSpan='2'>Fri<br />Apr 29, 2020</th>
                        <th colSpan='2'>Sat<br />Apr 30, 2020</th>
                        <th colSpan='2'>Total<br />Hours</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                      <td colSpan='1' rowSpan='4'>OTHA</td>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger>
                      </td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:45 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:45 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:45 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:58 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">7:45 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr className="time-td blue-text bg-lite-gray">
                      <td colSpan='2'>OTHA HOURS</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">4:25 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">28:25 AM</span>
                      </OverlayTrigger></td>
                  </tr>
                  <tr>
                      <td colSpan='1' rowSpan='4'>CLA</td>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr className="time-td blue-text bg-lite-gray">
                      <td colSpan='2'>CLA HOURS</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">8:00 AM</span>
                      </OverlayTrigger></td>
                  </tr>
                  <tr className="time-td blue-text">
                      <td colSpan='2'>HOLIDAY</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                  </tr>
                  <tr className="time-td blue-text">
                      <td colSpan='2'>PTO</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                        <MDBBtn size="sm" className="radius-50 mr-1 btn-primary1">
                          1
                        </MDBBtn>
                        <span>0.25</span>
                      </td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">0:25 AM</span>
                      </OverlayTrigger></td>
                  </tr>
                  <tr className="time-td blue-text bg-lite-gray">
                      <td colSpan='2'>TOTAL</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <OverlayTrigger trigger="click" key='top' placement='top' rootClose={true} overlay={popover}>
                        <span variant="secondary">36:25 AM</span>
                      </OverlayTrigger></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th colSpan='17' className="blue-head text-center py-2">
                      Timesheet Changes
                    </th>
                  </tr>
                  <tr>
                    <th colSpan='17' className="py-2">
                      <span className="pl-1">
                      <MDBBtn size="sm" className="radius-50 mr-1 btn-primary1" color="">
                        1
                      </MDBBtn>
                        Paid time off (PTO) Monday(Apr 24, 2020): PTO Added - Changes ,ade by John Manager
                        on 01:58 PM Apr 26, 2020 ___ | ___.
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan='17' className="py-2"></th>
                  </tr>
                  <tr>
                    <th colSpan='6' className="pt-5">
                      <Row>
                        <Col lg="6" md="6" sm="6" className="mt-3">
                          <span className="pl-1 font-9">Employee Signature:</span>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <div className="float-right">
                            <div className="guideList">
                                <div className="active"><span className="activePointer"></span>
                                <span className="pl-4">SIGN</span></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </th>
                    <th colSpan='3' className="pt-5">
                      <Row>
                        <Col lg="6" md="6" sm="6" className="mt-3">
                          <span className="pl-1 font-9">Date:</span>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                        </Col>
                      </Row>
                    </th>
                    <th colSpan='5' className="pt-5">
                    <Row>
                        <Col lg="6" md="6" sm="6" className="mt-3">
                          <span className="pl-1 font-9">Approval Signature:</span>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <div className="float-right">
                            <div className="guideList">
                                <div className="active"><span className="activePointer"></span>
                                <span className="pl-4">SIGN</span></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </th>
                    <th colSpan='3' className="pt-5">
                      <Row>
                        <Col lg="6" md="6" sm="6" className="mt-3">
                          <span className="pl-1 font-9">Date:</span>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                        </Col>
                      </Row>
                    </th>
                  </tr>
                </thead>
            </table>
          </div>
        </div>
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default EmployeeTimesheetDetail;
