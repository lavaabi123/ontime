import React from 'react';
import { MDBDataTable,MDBTooltip } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal,Container} from "react-bootstrap";

class LoadTable extends React.Component {
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
        label: 'Name',
        field: 'name',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Description',
        field: 'description',
      },
      {
        label: 'Status',
        field: 'status',
      },
      {
        label: 'ID',
        field: 'id',
      },
      {
        label: 'Type',
        field: 'type',
      },
      {
        label: 'Approver',
        field: 'approver',
      },
      {
        label: 'Extra Hours',
        field: 'allowance',
      },
      {
        label: 'Start Date',
        field: 'startdate',
      },
      {
        label: 'End Date',
        field: 'enddate',
      },
      {
        label: 'Max Hours',
        field: 'maxhours',
      },
      {
        label: 'Clock Round',
        field: 'clock',
      },
      {
        label: '',
        field: 'action',
        sort: 'disabled',
      },
      {
        label: '',
        field: 'delete',
        sort: 'disabled',
      },
    ],
    rows: [
      {
        name: 'Henry',
        description: 'The Activity is for On Time',
        status: 'Active',
        id: '1',
        type: 'Duty',
        approver: 'Joe Smith',
        allowance: "Allowed",
        startdate:"02/14/2021",
        enddate:"02/15/2021",
        maxhours:"2hrs",
        clock: 'N/A',
        action: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'John Smith',
        description: 'The Activity is for On Time',
        status: 'Active',
        id: '2',
        type: 'Duty',
        approver: 'Joe Smith',
        allowance: 'Not Allowed',
        startdate:"-",
        enddate:"-",
        maxhours:"-",
        clock: 'N/A',
        action: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'Helen',
        description: 'The Activity is for On Time',
        status: 'In-Active',
        id: '3',
        type: 'Duty',
        approver: 'Joe Smith',
        allowance: 'Not Allowed',
        startdate:"-",
        enddate:"-",
        maxhours:"-",
        clock: 'N/A',
        action: <i class="fa fa-edit"  onClick={() => this.setState({ editshow: true })} ></i>,
        delete: <i class="fa fa-trash"></i>,
      },
    ],
  }
  return (
    <div>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
        <h6 class="text-left float-left col-lg-10 col-md-10 col-xl-10 col-sm-12 pl-0">List of Activities. Total number of activities: 3</h6>
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-2 col-xl-2 col-md-2 col-sm-12 m-0"><i class="fa fa-plus pr-2"></i>Add Activity</button>
      </div>
      <MDBDataTable hover info={false} className="activitytable"  responsive={true} displayEntries={false} 
      noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} 
      data={datatable} searching={false} />
      <Modal  size="lg"  onHide={() => this.setState({ show: false })} 
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12"  style={this.state.rounding === false ? {} : { display: 'none' }}>
                  <label>TimeClock Rounding Policy</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>N/A</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12"  style={this.state.holidaypolicy === false ? {} : { display: 'none' }}>
                  <label>Holiday Policy</label>
                  <select disabled={this.state.holidaypolicy} placeholder="Select" className="form-control" name="approver">
                      <option>Standard</option>
                  </select>
                </div>
            </div> 
            <div className="form-group"  style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
              <label>Setup for Allowance of Extra Hours</label>
              </div>
              <div className="form-group row" style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
              <label className="pr-2 float-left col-2" style={{marginTop:'-4px'}}>Allowed</label>
              <input type="checkbox" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange} value="1" className="form-control" style={{width:'3%'}} name="country"/>                  
            </div>
              <div className="form-group row" style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
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
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 row">
              <label className="pr-2 col-5 mt-auto">Max Hours</label>
              <input type='number' class='form-control col-7' disabled={this.state.startdisabled} style={{ height:'32px' }} />
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
    <Modal  size="lg" onHide={() => this.setState({ editshow: false })} 
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12"  style={this.state.rounding === false ? {} : { display: 'none' }}>
                  <label>TimeClock Rounding Policy</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>N/A</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12"  style={this.state.holidaypolicy === false ? {} : { display: 'none' }}>
                  <label>Holiday Policy</label>
                  <select disabled={this.state.holidaypolicy} placeholder="Select" className="form-control" name="approver">
                      <option>Standard</option>
                  </select>
                </div>
            </div> 
            <div className="form-group"  style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
              <label>Setup for Allowance of Extra Hours</label>
              </div>
              <div className="form-group row" style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
              <label className="pr-2 float-left col-2" style={{marginTop:'-4px'}}>Allowed</label>
              <input type="checkbox" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange} value="1" className="form-control" style={{width:'3%'}} name="country"/>                  
            </div>
              <div className="form-group row" style={this.state.holidaypolicy === true ? {} : { display: 'none' }}>
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
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 row">
              <label className="pr-2 col-5 mt-auto">Max Hours</label>
              <input type='number' class='form-control col-7' disabled={this.state.startdisabled} style={{ height:'32px' }} />
            </div>
            </div>
            {/* <div className="form-group row pt-3">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <input type="button" className="btn btn-danger" value="Delete Activity" />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <p>Do you want to permanently delete this activity? This cannot be undone and you will 
                  lose all data for this activity. It is recommended that you inactive the activity.</p>
              </div>
  </div>  */}
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
export default LoadTable;