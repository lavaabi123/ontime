import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import DashboardGraph from './components/DashboardGraph.js';
import Footer from './components/Footer.js';

import {Row,Col, Card} from "react-bootstrap";

class Dashboard extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>   
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="content">
        <div className="contentwrapper pb-5 mb-5">
            <Row className="mb-4">
                <Col lg="6" md="6" sm="12" className="p-2">
                <img alt="Banner" className="float-left"  width="15%"
                        src={require("./components/assets/img/company31.png").default} />
                <div className="dash-head pl-3 pt-4 float-left">COMPANY ABC, INC.</div>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-4">
                    <select placeholder="Select" className="form-control" name="state">
                        <option>All Activities</option>
                        <option>Activity 1</option>
                    </select>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-4">
                    <select placeholder="Select" className="form-control" name="state">
                        <option>All Employees</option>
                        <option>Employee 1</option>
                    </select>
                </Col>
            </Row>
            <Card className="p-3 mb-3 small_font text-center">
                <Row>
                    <Col lg="3" md="3" sm="12">
                        <div className="dash-head">Total Hours Worked Today</div>
                        <div className="dash-value">16.25</div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="dash-head">Total Hours Worked this Week</div>
                        <div className="dash-value">78.25</div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="dash-head">Total Hours Worked this Pay Period</div>
                        <div className="dash-value">165.25</div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="dash-head">Attendance Rate this Week</div>
                        <div className="dash-value">94.25 %</div>
                    </Col>
                </Row>
            </Card>
            <div className="form-group row col-12">
                <label className="col-xl-1 col-lg-1 col-md-1 col-sm-10 act-text">Activity</label>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10">
                    <select placeholder="Select" className="form-control" name="state">
                        <option>Today</option>
                        <option>Bi-Weekly</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <DashboardGraph />
            </div>
        </div>
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default Dashboard;
