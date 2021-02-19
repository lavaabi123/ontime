import React from 'react';
import { MDBDataTable,MDBTooltip, MDBBtn  } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal, Row,Col,Nav, Card} from "react-bootstrap";
import { NavLink} from "react-router-dom";

class LoadTimesheetsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editshow: false,
      startDate: '',
      startDate1: '',
      startDate2: '',
      timedisabled:true,
      startdisabled:true,
      enddisabled:true,
      isChecked: false,
      holidaypolicy:true,
      rounding:false,
    };
  } 
  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }
  handleChange1 = (date) => {
    this.setState({
      startDate1: date
    })
  }
  handleChange2 = (date) => {
    this.setState({
      startDate2: date
    })
  }
  toggleChange = (e) => {
    if(e.target.checked === true){      
      this.setState({
        timedisabled:false,
        startdisabled:false,
        enddisabled:false,
      });
    }else{
      this.setState({
        timedisabled:true,
        startdisabled:true,
        enddisabled:true,
      });
    }
  }
  toggleChangePolicy = (e) => {
    console.log(e.target.value);
    if(e.target.value === 'Holiday'){      
      this.setState({
        holidaypolicy:false,
        rounding:true,
      });
    }else{
      this.setState({
        holidaypolicy:true,
        rounding:false,
      });
    }
  }
  isWeekday = (date) => {
    const day = date.getDay()
    return day === 0
  }
  ExampleCustomInput = ({ value, onClick }) => (
    <button disabled={this.state.startdisabled} className="example-custom-input form-control" style={{
      minWidth: '100px',minHeight:'32px'
    }} onClick={onClick}>
      {value}
    </button>
  );
  isWeekday1 = (date) => {
    const day = date.getDay()
    return day === 6
  }
  ExampleCustomInput1 = ({ value, onClick }) => (
    <button disabled={this.state.enddisabled} className="example-custom-input form-control" style={{
      minWidth: '100px',minHeight:'32px'
    }} onClick={onClick}>
      {value}
    </button>
  );
  ExampleCustomInput2 = ({ value, onClick }) => (
    <button disabled={this.state.timedisabled} className="example-custom-input form-control" style={{
      minWidth: '100px',minHeight:'32px'
    }} onClick={onClick}>
      {value}
    </button>
  );

  render() {
  let datatable = {
    columns: [
      {
        label: <input type="checkbox" />,
        field: 'check',
      },
      {
        label: 'Week Start',
        field: 'start',
      },
      {
        label: 'Status',
        field: 'status',
      },
      {
        label: 'Last Name',
        field: 'last_name',
      },
      {
        label: 'First Name',
        field: 'first_name',
      },
      {
        label: 'Total Hours',
        field: 'total',
      },
      {
        label: 'Overtime Hours',
        field: 'overtima',
      },
      {
        label: 'Regular Hours <=40',
        field: 'regular',
      },
      {
        label: 'OHTA Hours',
        field: 'ohta',
      },
      {
        label: 'CLA Hours',
        field: 'cla',
      },
      {
        label: 'Holiday Hours',
        field: 'holiday',
      },
      {
        label: 'PTO Hours',
        field: 'pto',
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
      },
    ],
    rows: [
      {
        check: <input type="checkbox" />,
        start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0">4/24/2020</Nav.Link>,
        status: 'Not Summited',
        last_name: 'Allen',
        first_name: 'Joe',
        total: '36.25',
        overtime: '0.00',
        regular: '36.25',
        ohta: '28.25',
        cla: '7.75',
        holiday: '0.00',
        pto: '0.25',
        action: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
      },
      {
        check: <input type="checkbox" />,
        start: '4/24/2020',
        status: 'Not Summited',
        last_name: 'Allen',
        first_name: 'Joe',
        total: '36.25',
        overtime: '0.00',
        regular: '36.25',
        ohta: '28.25',
        cla: '7.75',
        holiday: '0.00',
        pto: '0.25',
        action: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
      },
    ],
  }
  return (
    <div>
      <Card className="p-3 mb-3 small_font bg-amber border-0">
        <Row>
          <Col lg="3" md="3" sm="12">
            <label>Date Range:</label>
            <select placeholder="Select" className="form-control" name="state">
                <option>Select</option>
                <option>Bi-Weekly</option>
            </select>
          </Col>
          <Col lg="3" md="3" sm="12">
            <label>Timesheet Status:</label>
            <select placeholder="Select" className="form-control" name="state">
                <option>All</option>
                <option>Bi-Weekly</option>
            </select>
          </Col>
          <Col lg="3" md="3" sm="12">
            <label>Activity:</label>
            <select placeholder="Select" className="form-control" name="state">
                <option>All</option>
                <option>option 1</option>
            </select>
          </Col>
          <Col lg="3" md="3" sm="12">
            <label>Employee Type:</label>
            <select placeholder="Select" className="form-control" name="state">
                <option>All</option>
                <option>option 1</option>
            </select>
          </Col>
        </Row>
      </Card>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
        <div class="text-left float-left col-lg-10 col-md-10 col-xl-10 col-sm-12 pl-0">
          <MDBBtn color="success"><i class="fa fa-thumbs-up text-white"></i></MDBBtn>
          <MDBBtn className="ml-2" color="danger"><i class="fa fa-thumbs-down text-white"></i></MDBBtn>
        </div>
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-2 col-xl-2 col-md-2 col-sm-12 m-0">Mass Time Entry<i class="fa fa-book pl-2"></i></button>
      </div>
      <MDBDataTable hover info={false} className="activitytable"  responsive={true} displayEntries={false} 
      noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} 
      data={datatable} searching={false} />
      <Modal  scrollable={true} size="lg"  onHide={() => this.setState({ show: false })} 
          show={this.state.show}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        Add Activity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
          <div className="form-group">
              <label for="exampleInputEmail1">Activity Name*</label>
              <input type="text" className="form-control" placeholder="Activity Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Activity Description</label>
              <textarea type="email" className="form-control" placeholder="Enter Activity Description"></textarea>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity ID*</label>
                <input type="text" className="form-control" placeholder="Enter Activity ID" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity Type*</label>
                <select onChange={this.toggleChangePolicy} placeholder="Select" className="form-control" name="activity_type">
                    <option value="Duty">Duty</option>
                    <option value="PTO">PTO</option>
                    <option value="Holiday">Holiday</option>
                    <option value="GA">G&A</option>
                    <option value="OH">OH</option>
                    <option value="LWOP">LWOP</option>
                    <option value="Extra Mile">Extra Mile</option>
                    <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity Status*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Inactive</option>
                    <option>Active</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="mr-2">Activity Time Approver* 
                <MDBTooltip domElement tag="span" placement="top">
                <span className="ml-2">
                <i class="fa fa-question-circle" aria-hidden="true"></i></span>
                <span>Not seeing your activity time approver? Go to Employees to set up the approver</span></MDBTooltip></label>
                <select placeholder="Select" className="form-control" name="approver">
                    <option>Select</option>
                    <option>Joe Smith</option>
                    <option>Jesse Lake</option>
                </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>TimeClock Rounding Policy</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>N/A</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>Holiday Policy</label>
                  <select disabled={this.state.holidaypolicy} placeholder="Select" className="form-control" name="approver">
                      <option>Standard</option>
                  </select>
                </div>
            </div> 
            <div className="form-group">
              <label>Setup for Allowance of Extra Hours</label>
              </div>
              <div className="form-group row">
              <label className="pr-2 float-left col-2" style={{marginTop:'-4px'}}>Allowed</label>
              <input type="checkbox" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange} value="1" className="form-control" style={{width:'3%'}} name="country"/>                  
            </div>
              <div className="form-group row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">Start Week</label>
              <DatePicker selected={ this.state.startDate }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput />} 
          filterDate={this.isWeekday} onChange={ this.handleChange } className="form-control" 
          dateFormat="MM/dd/yyyy"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">End Week</label>
              <DatePicker selected={ this.state.startDate1 }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput1 />} 
          filterDate={this.isWeekday1} onChange={ this.handleChange1 } className="form-control" 
          dateFormat="MM/dd/yyyy"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">Max Hours</label>
              <DatePicker selected={ this.state.startDate2 }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput2 />} 
           onChange={ this.handleChange2 } showTimeSelect
           showTimeSelectOnly
           timeIntervals={15}
           timeCaption="Time"
           dateFormat="h:mm aa" className="form-control" dateFormat="MM/dd/yyyy"/>
            </div>
            </div>
            <div className="form-group row pt-3">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <input type="button" className="btn btn-danger" value="Delete Activity" />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <p>Do you want to permanently delete this activity? This cannot be undone and you will 
                  lose all data for this activity. It is recommended that you inactive the activity.</p>
              </div>
            </div>  
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ show: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
        <li><button onClick={() => this.setState({ show: false })} class="button resend-btn py-2 px-4 m-0">Save Changes</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal  scrollable={true} size="lg" onHide={() => this.setState({ editshow: false })} 
          show={this.state.editshow}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        OHTA Activity Created by John Smith on April 2, 2016
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
          <div className="form-group">
              <label for="exampleInputEmail1">Activity Name*</label>
              <input type="text" className="form-control" placeholder="Activity Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Activity Description</label>
              <textarea type="email" className="form-control" placeholder="Enter Activity Description"></textarea>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity ID*</label>
                <input type="text" className="form-control" placeholder="Enter Activity ID" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity Type*</label>
                <select onChange={this.toggleChangePolicy} placeholder="Select" className="form-control" name="activity_type">
                    <option value="Duty">Duty</option>
                    <option value="PTO">PTO</option>
                    <option value="Holiday">Holiday</option>
                    <option value="GA">G&A</option>
                    <option value="OH">OH</option>
                    <option value="LWOP">LWOP</option>
                    <option value="Extra Mile">Extra Mile</option>
                    <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Activity Status*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Inactive</option>
                    <option>Active</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="mr-2">Activity Time Approver* 
                <MDBTooltip domElement tag="span" placement="top">
                <span className="ml-2">
                <i class="fa fa-question-circle" aria-hidden="true"></i></span>
                <span>Not seeing your activity time approver? Go to Employees to set up the approver</span></MDBTooltip></label>
                <select placeholder="Select" className="form-control" name="approver" multiple='multiple'>
                    <option>Joe Smith</option>
                    <option>Jesse Lake</option>
                </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>TimeClock Rounding Policy</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>N/A</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>Holiday Policy</label>
                  <select disabled={this.state.holidaypolicy} placeholder="Select" className="form-control" name="approver">
                      <option>Standard</option>
                  </select>
                </div>
            </div> 
            <div className="form-group">
              <label>Setup for Allowance of Extra Hours</label>
              </div>
              <div className="form-group row">
              <label className="pr-2 float-left col-2" style={{marginTop:'-4px'}}>Allowed</label>
              <input type="checkbox" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange} value="1" className="form-control" style={{width:'3%'}} name="country"/>                  
            </div>
              <div className="form-group row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">Start Week</label>
              <DatePicker selected={ this.state.startDate }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput />} 
          filterDate={this.isWeekday} onChange={ this.handleChange } className="form-control" 
          dateFormat="MM/dd/yyyy"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">End Week</label>
              <DatePicker selected={ this.state.startDate1 }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput1 />} 
          filterDate={this.isWeekday1} onChange={ this.handleChange1 } className="form-control" 
          dateFormat="MM/dd/yyyy"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <label className="pr-2">Max Hours</label>
              <DatePicker selected={ this.state.startDate2 }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput2 />} 
           onChange={ this.handleChange2 } showTimeSelect
           showTimeSelectOnly
           timeIntervals={15}
           timeCaption="Time"
           dateFormat="h:mm aa" className="form-control" dateFormat="MM/dd/yyyy"/>
            </div>
            </div>
            <div className="form-group row pt-3">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <input type="button" className="btn btn-danger" value="Delete Activity" />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <p>Do you want to permanently delete this activity? This cannot be undone and you will 
                  lose all data for this activity. It is recommended that you inactive the activity.</p>
              </div>
            </div>  
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
        <li><button onClick={() => this.setState({ editshow: false })} class="button resend-btn py-2 px-4 m-0">Save Changes</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
}
export default LoadTimesheetsTable;