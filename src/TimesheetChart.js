import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import Footer from './components/Footer.js';
import {Row,Col, Card} from "react-bootstrap";

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
                            <td>36.5 Hrs</td><td>76.5 Hrs</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
          </Row>
          <div className="mt-3">
            <table border='1' className="col-12 text-center text-black">
                    <thead>
                        <tr>
                            <th colSpan='16' className="blue-head py-2">
                              <span>WEEKLY TIME SHEET</span>
                              </th>
                        </tr>
                        <tr>
                            <th colSpan='2'>ACTIVITY</th>
                            <th colSpan='5'>MONTH 1</th>
                            <th colSpan='6'>MONTH 2</th>
                            <th colSpan='2'>TOTAL</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 6</th>
                            <th>REGULAR</th>
                            <th>OVERTIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td></td><td className="font-weight-bold">SUMMARY</td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th colSpan='5'>MONTH 3</th>
                            <th colSpan='4'>MONTH 4</th>
                            <th></th>
                            <th></th><th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td></td><td className="font-weight-bold">SUMMARY</td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <th colSpan='16'>[Group Name] [Group ID] [Activity Name] [Activity ID] EMPLOYEE NAME: [Last Name], [First Name]</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>ACTIVITY</th>
                            <th colSpan='5'>MONTH 1</th>
                            <th colSpan='6'>MONTH 2</th>
                            <th colSpan='2'>TOTAL</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 6</th>
                            <th>REGULAR</th>
                            <th>OVERTIME</th>
                        </tr>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
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
