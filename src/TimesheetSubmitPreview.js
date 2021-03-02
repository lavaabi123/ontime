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

class TimesheetSubmitPreview extends React.Component {  
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
                 <MDBBtn size="md" className="button cancel-btn cancel-btn1 float-right">
                   Cancel
                  </MDBBtn>
                  <Nav.Link as={NavLink} to="/TimesheetSubmitted" className="p-0">
                  <MDBBtn size="md" className="button resend-btn float-right ml-0 mr-1">
                    Submit Timesheet
                  </MDBBtn>
                  </Nav.Link>
                </div>
              </Col>
            </Row>
          </Card>
          
          <div className="mt-3">
            <table border='1' className="col-12 text-black">
                <thead>
                    <tr>
                        <th colSpan='17' className="blue-head py-2">
                          <Row>
                            <Col lg="6" md="6" sm="12">
                              <div className="pl-2  float-left">
                                <span className="font-12">WEEKLY TIME SHEET</span>
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
                      <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                      <span variant="secondary">8:00 AM</span></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                        <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">7:45 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                       <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                      <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                       <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">7:45 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                       <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                       <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">7:45 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                      <span variant="secondary">7:58 AM</span>
                      </td>
                      <td colSpan='2'>
                       <span variant="secondary">7:45 AM</span>
                      </td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr className="time-td blue-text bg-lite-gray">
                      <td colSpan='2'>OTHA HOURS</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                      <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2' className="text-blue">
                      <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                       <span variant="secondary">8:00 AM</span>
                      </td>
                      <td colSpan='2' className="text-blue">
                       <span variant="secondary">4:25 AM</span>
                      </td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                       <span variant="secondary">28:25 AM</span>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan='1' rowSpan='4'>CLA</td>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>
                       <span variant="secondary">8:00 AM</span>
                      </td>
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
                       <span variant="secondary">8:00 AM</span>
                      </td>
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
                       <span variant="secondary">8:00 AM</span>
                      </td>
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
                      <span variant="secondary">8:00 AM</span>
                      </td>
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
                       <span variant="secondary">8:00 AM</span>
                     </td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">
                       <span variant="secondary">8:00 AM</span>
                      </td>
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
                       <span variant="secondary">0:25 AM</span>
                      </td>
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
                       <span variant="secondary">36:25 AM</span>
                      </td>
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
                        on 01:58 PM Apr 26, 2020 <img alt="Sign"  width="3%"
                        src={require("./components/assets/img/empsign1.png").default} /> | <img alt="Sign"  width="3%"
                        src={require("./components/assets/img/empsign1.png").default} />.
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan='17' className="py-2"></th>
                  </tr>
                  <tr>
                    <th colSpan='6' className="">
                      <Row>
                        <Col lg="4" md="4" sm="6" className="mt-3 pt-5">
                          <span className="pl-1 font-9">Employee Signature: </span>
                        </Col>
                        <Col lg="8" md="8" sm="6" className="mt-3 pt-4">
                        <img alt="Sign"  width="30%"
                        src={require("./components/assets/img/empsign1.png").default} />
                        <span className="text-muted small_font">17:00:00 2016-04-29</span>
                        </Col>
                      </Row>
                    </th>
                    <th colSpan='3' className="pt-5">
                      <Row>
                        <Col lg="12" md="12" sm="12" className="mt-3">
                          <span className="pl-1 font-9">Date:  4/29/2016</span>
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
        <div className="col-6"><button className="button resend-btn float-right px-4">Yes, Sign & Submit</button></div>
      </div>
      </Modal.Footer>
    </Modal>  
    </div>
    </div>
      </Container>
      
    </div>
  );
  }
}

export default TimesheetSubmitPreview;
