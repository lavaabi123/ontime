import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import Footer from './components/Footer.js';
import {Row,Col, Card} from "react-bootstrap";
import { MDBBtn } from 'mdbreact';

class TimesheetChart extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>   
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="content">
        <div className="contentwrapper pt-3 pb-5 mb-5">
          <Card className="p-3 mb-3 small_font bg-amber border-0">
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="">
                  <span className="pr-3 font-weight-bold font-16">Allen, Joe</span>
                  <span className="pr-3 chart-text">98.9%</span>
                  <span className="pr-3 small-font">Attendance Rate</span>
                  <span className="pr-3 chart-text">0.67%</span>
                  <span className="small-font">Computer Idle Time</span>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="form-group row mb-0">
                  <label className="col-xl-3 col-lg-3 col-md-3 col-sm-10 act-text">Date</label>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-10">
                    <input type="date" className="form-control" placeholder="Date" />
                  </div>
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
                      <th colSpan='2' className="font-weight-bold text-right pr-1">BRANCH:</th>
                      <th colSpan='15' className="pl-1">MIAMI, FL (345)</th>
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
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>8:00 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>7:45 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>8:00 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>7:45 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>8:00 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>7:45 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr>
                      <td colSpan='1'>OUT</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>8:00 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>7:58 AM</td>
                      <td colSpan='2'>7:45 AM</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                  </tr>
                  <tr className="time-td blue-text bg-lite-gray">
                      <td colSpan='2'>OTHA HOURS</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">8-00</td>
                      <td colSpan='2' className="text-blue">8:00 AM</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">8.00</td>
                      <td colSpan='2' className="text-blue">4.25</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">28.25</td>
                  </tr>
                  <tr>
                      <td colSpan='1' rowSpan='4'>CLA</td>
                      <td colSpan='1'>IN</td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'></td>
                      <td colSpan='2'>8:00 AM</td>
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
                      <td colSpan='2'>8:00 AM</td>
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
                      <td colSpan='2'>8:00 AM</td>
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
                      <td colSpan='2'>8:00 AM</td>
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
                      <td colSpan='2' className="text-blue">8.00</td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">8:00</td>
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
                        <MDBBtn size="sm" className="radius-50 mr-1" color="primary">
                          1
                        </MDBBtn>
                        <span>0.25</span>
                      </td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue"></td>
                      <td colSpan='2' className="text-blue">0.25</td>
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
                      <td colSpan='2' className="text-blue">36.25</td>
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
                      <MDBBtn size="sm" className="radius-50 mr-1" color="primary">
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

export default TimesheetChart;
