import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import Footer from './components/Footer.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal,Container,Nav,Row,Col,Card,Popover,Button,OverlayTrigger} from "react-bootstrap";
import { MDBBtn } from 'mdbreact';
import { NavLink} from "react-router-dom";
import Timer from 'react-compound-timer'

class MyOwnTimesheet extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      punch: false,
      startTime: '',
      weeklyDate: null,
      clockin: true,
      curtime: '00:00:00 PM Apr 29, 2020',
      signshow: false,
    };
  }
  
  componentDidMount() {
    var d = new Date();

    // set to Monday of this week
    d.setDate(d.getDate() - (d.getDay() + 6) % 7);


    // create new date of day before
    var sunday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
    this.setState({
      weeklyDate: sunday
    })
  }
 
  handleChange = (date) => {
    this.setState({
      startTime: date
    })
  }
 getTime = () => {
  var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   if (second < 10) { second = "0" + second; }
   var timeString = hour + ':' + minute + ':' + second + " " + ap;
   var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = now.getDate();
    var m = strArray[now.getMonth()];
    var y = now.getFullYear();
    var ts = m + ''+(d <= 9 ? '0' + d : d) + ', ' + y;
  this.setState({
    curtime: timeString + ' ' +ts
  })
 }
  isWeekday = (date) => {
      const day = date.getDay()
      return day === 0
  }
  handlePressStartButton = () => {
    this.setState({ clockin: false });
    console.log('test');
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
        <div className="content">
        <div className="contentwrapper pb-5 mb-5">
          <Card className="p-3 mb-3 small_font bg-amber border-0">
            <Row>
              <Col lg="8" md="8" sm="12">
                <div className="">
                  <span className="pr-3 font-weight-bold font-16">Allen, Joe</span>
                  <span className="pr-3 chart-text">98.9%</span>
                  <span className="pr-3 small-font">Attendance Rate</span>
                </div>
              </Col>
              <Col lg="4" md="4" sm="12">
                <div className="form-group row mb-0">
                  <label className="col-xl-4 col-lg-4 col-md-4 col-sm-10 act-text px-0">Week Started: </label>
                  <DatePicker  selected={this.state.weeklyDate} onChange={date => this.setState({weeklyDate: date})}  
                    name="startDate" className="form-control ml-3 col-xl-8 col-lg-8 col-md-8 col-sm-10" 
                    filterDate={this.isWeekday} value={this.state.weeklyDate} dateFormat="MM/dd/yyyy"/>
                </div>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col lg="8" md="8" sm="12">
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
            <Col lg="4" md="4" sm="12" className="row my-auto">
              <select placeholder="Select" className="col-lg-7 col-md-7 col-sm-6 form-control float-left" name="state">
                  <option>OHTA(98)</option>
                  <option>PLC(23)</option>
              </select>
            <Timer  className="col-12" initialTime={0} startImmediately={false}>
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                  <MDBBtn size="md" className="col-lg-4 col-md-4 col-sm-6 ml-2 btn-success float-right" onClick={() => {start();this.setState({ clockin: false });this.getTime()}} style={this.state.clockin === true ? {} : { display: 'none' }}>
                    Clock In
                  </MDBBtn>
                  <MDBBtn size="md" className="col-lg-4 col-md-4 col-sm-6 ml-2 btn-danger float-right" onClick={() => this.setState({ clockin: true })} style={this.state.clockin === false ? {} : { display: 'none' }}>
                    Clock Out
                  </MDBBtn>
                    <div className="small_font text-success col-12 pl-0 mt-2" style={this.state.clockin === false ? {} : { display: 'none' }}>
                        <Timer.Hours /> : <Timer.Minutes /> : <Timer.Seconds /> <span className="text-right float-right">Start Time : {this.state.curtime}</span>
                    </div>
                </React.Fragment>
            )}
          </Timer>
            </Col>
          </Row>
          <div className="mt-3">
            <table border='1' className="col-12 text-black">
                <thead>
                    <tr>
                        <th colSpan='17' className="blue-head py-2">
                          <Row>
                            <Col lg="6" md="6" sm="12">
                              <div className="pl-2  float-left">
                                <span className="font-12">WEEKLY TIME SHEET</span>
                                <span className="small-font pl-2">April-24, 2020 - April-30, 2020</span>
                              </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                              <div className="pr-2 float-right">
                                <span className="pr-2 font-12">Active</span>
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
                            <div className="guideList"  onClick={date => this.setState({signshow: true})}>
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
        <Modal  scrollable={true} size="md"  onHide={() => this.setState({ signshow: false })} 
          show={this.state.signshow}>
      <Modal.Header closeButton className="h6 background-green1">
        <Modal.Title className="h6 text-white small_font" id="contained-modal-title-vcenter">
        Timesheet Submission Confirmation by Joe Allen 4/29/2016
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
        <p className="xs_font text-dark text-center">Please enter your name and password to electronically sign and submit your timesheet. ABC, Inc. requires that you certify your timesheet by submitting using this your electronic signature. </p>
        <p className="small_font font-weight-bold text-center">Sun Apr 24, 2016 - Mon Apr 25, 2016</p>
        <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Login Name :</label>            
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <input type="text" className="form-control" placeholder="" />
          </div>
          </div>
          <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Password :</label>            
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <input type="password" className="form-control" placeholder="" />
          </div>
        </div>
          <p className="small_font text-center">Sun Apr 24, 2016 - Sat Apr 30, 2016</p>
          <p className="small_font text-center"><b>Allen, Joe - Total Hours 40.00</b></p>
          <p className="xs_font text-center">I Certify that all the information in my timesheet is accurate and true.</p>
          </Modal.Body>
      <Modal.Footer>
      <div class="col-12 row mt-2">
       
        <div className="col-6"><button onClick={() => this.setState({ signshow: false })} className="button resend-btn background-red px-2 float-left">No Cancel</button></div>
        <div className="col-6">
          <Nav.Link as={NavLink} to="/TimesheetSubmitPreview" className="p-0">
            <button className="button resend-btn float-right px-4">Yes, Sign & Submit</button>
          </Nav.Link>
          </div>
      </div>
      </Modal.Footer>
    </Modal>  
    </div>
  );
  }
}

export default MyOwnTimesheet;
