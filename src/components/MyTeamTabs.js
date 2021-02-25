import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {Modal,Container,Toast,Row,Col,Card,Nav} from "react-bootstrap";
import LoadMyTeamTable from './LoadMyTeamTable.js';
import ReportingSection from '../ReportingSection.js';
import EmployeeList from './EmployeeList.js';
import { CardBody, CardFooter, CardHeader } from 'reactstrap';
import { MDBBtn} from 'mdbreact';
import {NavLink} from "react-router-dom";
import PayrollTable from './PayrollTable.js';
import TimesheetPreview from './TimesheetPreview.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyTeamTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
      viewshow: false,
      editshow: false,
      supershow: false,
      editsupershow: false,
      name: 'React',
      remove: false,
      edit: true,
      reset: false,
      superreset: false,
      startDate: null,
        endDate: null,
        semiMonthlyDate: null,
        MonthlyDate: null,
        weeklyDate: null,
        biWeeklyDate: null,
        TimePeriod: 'weekly',
        includesReport: 'allemployees',
        reportingHours: 'allhours',
        packEmployees: 'alphabet',
        preview: 'timesheet',
        showreport: '',
        showreportcss: false,
    };
  } 
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }

  loadPreview = (e) => {
    e.preventDefault();
    this.setState({ 
        showreport: this.state.preview,
        showreportcss:true,
    });
}
isWeekday = (date) => {
    const day = date.getDay()
    return day === 0
}
isMonthly = (date) => {
    const day = date.getDate()
    return day === 1
}
isSemiMonthly = (date) => {
    const day = date.getDate()
    return day === 1 || day === 16;
}
handleOnChange = (e) => {
  this.setState({
    preview: e.target.value
  })
}
  render() {
    return (
      <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#tests-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-label">Manage Employee Time</span>
              </button>
            </div>
            <div className="step" data-target="#tests-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-label">Run Reports</span>
              </button>
            </div>
            <div className="step" data-target="#tests-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-label">About Employees</span>
              </button>
              
            </div>
          </div>
          <div className="">
              <div id="tests-l-1" className="content small_font">
              <LoadMyTeamTable />
              </div>
              <div id="tests-l-2" className="content  pl-2  small_font">
              <div className="pt-3 pb-5 mb-5 text-left small_font">
              <h5 className="mt-2">Timesheet Reporting</h5>
              <form onSubmit={this.onSubmit} className="payrollform">
              <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Time Period</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" defaultChecked value="weekly" onClick={() => this.setState({ TimePeriod: 'weekly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="biweekly" onClick={() => this.setState({ TimePeriod: 'biweekly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Bi-Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="monthly" onClick={() => this.setState({ TimePeriod: 'monthly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Monthly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="semimonthly" onClick={() => this.setState({ TimePeriod: 'semimonthly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Semi-Monthly</label>
                    </div>                    
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="daytoday" onClick={() => this.setState({ TimePeriod: 'daytoday' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Day to Day</label>
                    </div>
                </div>
                <div className="form-group row col-12 weekly" style={this.state.TimePeriod === 'weekly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Weekly Date</label>
                    <DatePicker  selected={this.state.weeklyDate} onChange={date => this.setState({weeklyDate: date})}  
                    name="startDate" className="form-control ml-2" 
                    filterDate={this.isWeekday} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 biweekly" style={this.state.TimePeriod === 'biweekly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Bi-Weekly Date</label>
                    <DatePicker  selected={this.state.biWeeklyDate} onChange={date => this.setState({biWeeklyDate: date})}  
                    name="startDate" className="form-control ml-2" 
                    filterDate={this.isWeekday} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 monthly" style={this.state.TimePeriod === 'monthly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Monthly Date</label>
                    <DatePicker  selected={this.state.MonthlyDate} onChange={date => this.setState({MonthlyDate: date})} 
                    name="startDate" className="form-control ml-2"  
                    filterDate={this.isMonthly} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 semimonthly" style={this.state.TimePeriod === 'semimonthly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Semi-Monthly Date</label>
                    <DatePicker selected={this.state.semiMonthlyDate} onChange={date => this.setState({semiMonthlyDate: date})} 
                    name="startDate" className="form-control ml-2" filterDate={this.isSemiMonthly} 
                    dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 daytoday" style={this.state.TimePeriod === 'daytoday' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Day to Day Date</label>
                    <DatePicker  className="form-control ml-2" placeholderText="Start Date"
                        selected={this.state.startDate}
                        onChange={date => this.setState({startDate: date})}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                    />
                    <DatePicker  className="form-control ml-4" placeholderText="End Date"
                        selected={this.state.endDate}
                        onChange={date => this.setState({endDate: date})}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        minDate={this.state.startDate}
                    />
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Report Includes</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="allemployees" defaultChecked onClick={() => this.setState({ includesReport: 'allemployees' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">All Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" onClick={() => this.setState({ includesReport: 'groups' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Groups</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="activities" onClick={() => this.setState({ includesReport: 'activities' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Activities</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="individuals" onClick={() => this.setState({ includesReport: 'individuals' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Individuals</label>
                    </div> 
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'allemployees' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Group</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Group 1</option>
                        <option>Group 2</option>
                    </select>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Activities</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Activity 1</option>
                        <option>Activity 2</option>
                    </select>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'individuals' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Employee 1</option>
                        <option>Employee 2</option>
                    </select>
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Hours to be Reported</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="allhours" defaultChecked onClick={() => this.setState({ reportingHours: 'allhours' })} className="form-control permission-checkbox" name="reportinghours"/>
                        <label className="permission-label">All Hours</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="activities" onClick={() => this.setState({ reportingHours: 'activities' })} className="form-control permission-checkbox" name="reportinghours"/>
                        <label className="permission-label">Activities</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.reportingHours === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Activities</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Activity 1</option>
                        <option>Activity 2</option>
                    </select>
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Pack Employees in Report</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="alphabet" defaultChecked onClick={() => this.setState({ packEmployees: 'alphabet' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Alphabetically</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" onClick={() => this.setState({ packEmployees: 'groups' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Groups</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="wage" onClick={() => this.setState({ packEmployees: 'wage' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Wage Category</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.packEmployees === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">How to Pack within Group</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="alphabet" defaultChecked className="form-control permission-checkbox" name="packemployeesgroup"/>
                        <label className="permission-label">Alphabetically</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" className="form-control permission-checkbox" name="packemployeesgroup"/>
                        <label className="permission-label">Wage Category</label>
                    </div>
                </div>
                <div className="form-group row col-12">
                        <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Report Type</label>
                        <select onChange={this.handleOnChange} className="form-control col-xl-6 col-lg-6 col-md-6 col-sm-10 ml-2">
                            <option value="">Select</option>
                            <option value="timesheet">Get Timesheet Report: Spreadsheet and/or PDF</option>
                            <option value="original">Get Original Timesheet Receipt: PDF only</option>
                            <option value="payroll">Get Payroll Report: Spreadsheet and/or PDF</option>
                            <option value="quickbook">Get Export Report for QuickBook: Spreadsheet</option>
                        </select>
                </div>
                <div className="form-group row col-12 h-auto m-auto pt-3">
                    <button onClick={this.loadPreview} class="button resend-btn m-auto">Generate Report</button>
                </div>
                <div style={this.state.showreport === 'payroll' && this.state.showreportcss === true ? {} : { display: 'none' }} >
                <PayrollTable />
                </div>
                </form>
                </div>
              </div>
              <div id="tests-l-3" className="content pl-2 small_font">
                <Row>
                    <Col lg="3" md="3" sm="12">
                      <Nav.Link as={NavLink} to="/EmployeeList" className="p-0 text-dark">
                        <Card className="border">
                            <CardHeader className="pb-0 pt-4">
                                <h6 className="font-weight-bolder">
                                    OTHA (948)
                                </h6>
                            </CardHeader>
                            <CardBody className="py-1 font-11">
                                <div className="font-10">
                                    Project Created : 4/01/2020
                                </div>
                                <div className="font-10">
                                    Project Administrator : Jessy Lake
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-book" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </MDBBtn>
                                </div>
                            </CardFooter>
                        </Card>
                        </Nav.Link>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                      <Nav.Link as={NavLink} to="/EmployeeList" className="p-0 text-dark">
                        <Card className="border">
                            <CardHeader className="pb-0 pt-4">
                                <h6 className="font-weight-bolder">
                                    CLA (712)
                                </h6>
                            </CardHeader>
                            <CardBody className="py-1 font-11">
                                <div className="font-10">
                                    Project Created : 4/01/2020
                                </div>
                                <div className="font-10">
                                    Project Administrator : Jessy Lake
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-book" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </MDBBtn>
                                </div>
                            </CardFooter>
                        </Card>
                        </Nav.Link>
                    </Col>
                </Row>
                <div className="mt-5">
                  <EmployeeList />
                </div>
              </div>
            <Modal scrollable={true} size="lg" onHide={() => this.setState({ supershow: false })}
          show={this.state.supershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Add Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <div className="p-3 form-group row">
              
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ supershow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ supershow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="lg"  onHide={() => this.setState({ editsupershow: false })}
          show={this.state.editsupershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="p-3 form-group row">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="xl"  onHide={() => this.setState({ show: false })}
          show={this.state.show}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Add Administrator
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <div className="p-3 form-group row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Employees</label>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Policies</label>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 pl-4">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label pl-1">Do Reporting</label>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ show: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ show: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="xl"  onHide={() => this.setState({ editshow: false })}
          show={this.state.editshow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Administrator User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="p-3 form-group row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Employees</label>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Policies</label>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 pl-4">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label pl-1">Do Reporting</label>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ editshow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="md"  onHide={() => this.setState({ superreset: false })}
          show={this.state.superreset}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Reset Super User Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Password*</label>
              <input type="email" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password*</label>
              <input type="text" className="form-control" placeholder="Enter Confirm Password" />
            </div>       
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ superreset: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ superreset: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="md"  onHide={() => this.setState({ reset: false })}
          show={this.state.reset}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Reset Administrator Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Password*</label>
              <input type="email" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password*</label>
              <input type="text" className="form-control" placeholder="Enter Confirm Password" />
            </div>       
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ reset: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ reset: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
          </div>
        </div>
        <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
  }}
>
  <Toast
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
    }} onClose={() =>this.setState({ remove: false })} show={this.state.remove} delay={2000} autohide>
          <Toast.Body>Removed Super User Successfully!</Toast.Body>
        </Toast>
      </div>
      </div>
    );
  }
}

export default MyTeamTabs;
