import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal} from "react-bootstrap";
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


class LoadEmployeesTable extends React.Component {
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
      selected: ['one'],
      options : [
        { value: 'one', label: 'Option One' },
        { value: 'two', label: 'Option Two' },
      ]
    };
  } 
  onChange = (selected) => {
    this.setState({ selected });
  };
  onAdd = (options) => {
    this.setState({ options });
  };
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
  ExampleCustomInput2 = ({ value, onClick }) => (
    <button  className="example-custom-input form-control" style={{
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
        label: 'Status',
        field: 'status',
      },
      {
        label: 'Wage Category',
        field: 'category',
      },
      {
        label: 'Employee Type',
        field: 'type',
      },
      {
        label: 'Hire Date',
        field: 'date',
      },
      {
        label: 'Timing Method',
        field: 'method',
      },
      {
        label: 'Activities',
        field: 'activities',
      },
      {
        label: 'Group ID',
        field: 'groupid',
      },
      {
        label: 'Edit',
        field: 'edit',
        sort: 'disabled',
      },
      {
        label: 'Delete',
        field: 'delete',
        sort: 'disabled',
      },
    ],
    rows: [
      {
        name: 'Henry',
        status: 'Active',
        category: 'Exempt',
        type: 'Hourly',
        date: '02/10/2020',
        method: 'Punch In/Out',
        activities: 'N/A',
        groupid: '1',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'John Smith',
        status: 'Active',
        category: 'Exempt',
        type: 'Hourly',
        date: '02/10/2020',
        method: 'Punch In/Out',
        activities: 'N/A',
        groupid: '2',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'Helen',
        status: 'Active',
        category: 'Exempt',
        type: 'Hourly',
        date: '02/10/2020',
        method: 'Punch In/Out',
        activities: 'N/A',
        groupid: '3',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
    ],
  }
  return (
    <div>
      
      <div className="form-group row small_font">      
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
          <label>Group</label>
          <select className="form-control">
            <option>All Group</option>
            <option>Group 1</option>
          </select>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
          <label>Activity</label>
          <select className="form-control">
            <option>All Activity</option>
            <option>Activity 1</option>
          </select>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
          <label>Status</label>
          <select className="form-control">
            <option>All Employees</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Terminated</option>
            <option>Archived</option>
          </select>
        </div>
      </div>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
        <h6 class="text-left float-left col-lg-10 col-md-10 col-xl-10 col-sm-12 pl-0">The Number of Total Employees : (3)</h6>
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-2 col-xl-2 col-md-2 col-sm-12 m-0"><i class="fa fa-plus pr-2"></i>Add Employees</button>
      </div>
      <MDBDataTable hover info={false}  responsive={true} displayEntries={false} noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searching={false} />
      <Modal  scrollable={true} size="lg"  onHide={() => this.setState({ show: false })} 
          show={this.state.show}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        Add Employee Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>First Name*</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Last Name*</label>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Status*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Terminated</option>
                    <option>Archived</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Username*</label>
                <input type="text" className="form-control" placeholder="Enter Userame" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Password*</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Confirm Password*</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label className="pr-2">Notification Time</label>
                <select className="form-control">
                  <option>5 Min</option>
                  <option>10 Min</option>
                  <option>15 Min</option>
                  <option>20 Min</option>
                  <option>25 Min</option>
                  <option selected='selected'>30 Min</option>
                  <option>35 Min</option>
                  <option>40 Min</option>
                  <option>45 Min</option>
                  <option>50 Min</option>
                  <option>55 Min</option>
                  <option>60 Min</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Employee Number</label>
                <input type="text" className="form-control" placeholder="Employee Number" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Timing Method*</label>
                    <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                        <option>Manually Enter</option>
                    </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Employee Type*</label>
                <select onChange={this.toggleChangePolicy} placeholder="Select" className="form-control" name="activity_type">
                    <option value="Salaried">Salaried</option>
                    <option value="FT">Full Time Hourly</option>
                    <option value="PT">PT Hourly</option>
                    <option value="Temporary">Temporary</option>
                    <option value="SUB">SUB</option>
                    <option value="Intern">Intern</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>Wage Category*</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>Exempt</option>
                      <option>Non-Exempt</option>
                      <option>Others</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Hire Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Termination Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
            </div> 
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Anniversary Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Personal Email*</label>
                    <input type="email" className="form-control" placeholder="Enter Email ID" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Work Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email ID" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Cell Phone</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Address 2</label>
              <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>State</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                    <option>State</option>
                          <option>Alabama - AL</option>
                          <option>Alaska - AK</option>
                          <option>Alabama - AL</option>
                          <option>Arizona - AZ</option>
                          <option>Arkansas - AR</option>
                          <option>California - CA</option>
                          <option>Colorado - CO</option>
                          <option>Connecticut - CT</option>
                          <option>Delaware - DE</option>
                          <option>District of Columbia - DC</option>
                          <option>Florida - FL</option>
                          <option>Georgia - GA</option>
                          <option>Hawaii - HI</option>
                          <option>Idaho - ID</option>
                          <option>Illinois - IL</option>
                          <option>Indiana - IN</option>
                          <option>Iowa - IA</option>
                          <option>Kansas - KS</option>
                          <option>Kentucky - KY</option>
                          <option>Louisiana - LA</option>
                          <option>Maine - ME</option>
                          <option>Maryland - MD</option>
                          <option>Massachusetts - MA</option>
                          <option>Michigan - MI</option>
                          <option>Minnesota - MN</option>
                          <option>Mississippi - MS</option>
                          <option>Missouri - MO</option>
                          <option>Montana - MT</option>
                          <option>Nebraska - NE</option>
                          <option>Nevada - NV</option>
                          <option>New Hampshire - NH</option>
                          <option>New Jersey - NJ</option>
                          <option>New Mexico - NM</option>
                          <option>New York - NY</option>
                          <option>North Carolina - NC</option>
                          <option>North Dakota - ND</option>
                          <option>Ohio - OH</option>
                          <option>Oklahoma - OK</option>
                          <option>Oregon - OR</option>
                          <option>Pennsylvania - PA</option>
                          <option>Puerto Rico - PR</option>
                          <option>Rhode Island - RI</option>
                          <option>South Carolina - SC</option>
                          <option>South Dakota - SD</option>
                          <option>Tennessee - TN</option>
                          <option>Texas - TX</option>
                          <option>Utah - UT</option>
                          <option>Vermont - VT</option>
                          <option>Virginia - VA</option>
                          <option>Washington - WA</option>
                          <option>West Virginia - WV</option>
                          <option>Wisconsin - WI</option>
                          <option>Wyoming - WY</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" placeholder="Enter Zip Code" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <label className="mr-2">Activities</label>
                    <DualListBox lang ={{selectedHeader:'Selected Activities',
                    availableHeader: 'Available Activities'}}
                    showHeaderLabels={true}
                        options={this.state.options}
                        selected={this.state.selected}
                        onChange={this.onChange} className="mt-2" icons={{
                          moveLeft: '<',
                          moveAllLeft: '<<',
                          moveRight: '>',
                          moveAllRight: '>>'
                      }}
                    />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 m-auto">
                </div>
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label className="mr-2">Assigned Group</label>
                    <select placeholder="Select" className="form-control" name="approver">
                        <option>None</option>
                        <option>Joe Smith</option>
                        <option>Jesse Lake</option>
                    </select>
                </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Is Manager?</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>NO</option>
                    <option>YES</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Timesheet Approver*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Select</option>
                    <option>Joe Smith</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Upload Signature File*</label>
                  <input type="file" className="form-control"/>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Upload Initials File*</label>
                  <input type="file" className="form-control"/>
              </div>
            </div>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ show: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
        <li><button onClick={() => this.setState({ show: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal  scrollable={true} size="lg" onHide={() => this.setState({ editshow: false })} 
          show={this.state.editshow}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        Edit Employee Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
      <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>First Name*</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Last Name*</label>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Status*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Terminated</option>
                    <option>Archived</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Username*</label>
                <input type="text" className="form-control" placeholder="Enter Userame" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Password*</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Confirm Password*</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label className="pr-2">Notification Time</label>
                <select className="form-control">
                  <option>5 Min</option>
                  <option>10 Min</option>
                  <option>15 Min</option>
                  <option>20 Min</option>
                  <option>25 Min</option>
                  <option selected='selected'>30 Min</option>
                  <option>35 Min</option>
                  <option>40 Min</option>
                  <option>45 Min</option>
                  <option>50 Min</option>
                  <option>55 Min</option>
                  <option>60 Min</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Employee Number</label>
                <input type="text" className="form-control" placeholder="Employee Number" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Timing Method*</label>
                    <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                        <option>Manually Enter</option>
                    </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Employee Type*</label>
                <select onChange={this.toggleChangePolicy} placeholder="Select" className="form-control" name="activity_type">
                   <option value="Salaried">Salaried</option>
                    <option value="FT">Full Time Hourly</option>
                    <option value="PT">PT Hourly</option>
                    <option value="Temporary">Temporary</option>
                    <option value="SUB">SUB</option>
                    <option value="Intern">Intern</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>Wage Category*</label>
                  <select disabled={this.state.rounding} placeholder="Select" className="form-control" name="approver">
                      <option>Exempt</option>
                      <option>Non-Exempt</option>
                      <option>Others</option>
                  </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Hire Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Termination Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
            </div> 
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Anniversary Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Personal Email*</label>
                    <input type="email" className="form-control" placeholder="Enter Email ID" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Work Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email ID" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Cell Phone</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Address 2</label>
              <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>State</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                    <option>State</option>
                          <option>Alabama - AL</option>
                          <option>Alaska - AK</option>
                          <option>Alabama - AL</option>
                          <option>Arizona - AZ</option>
                          <option>Arkansas - AR</option>
                          <option>California - CA</option>
                          <option>Colorado - CO</option>
                          <option>Connecticut - CT</option>
                          <option>Delaware - DE</option>
                          <option>District of Columbia - DC</option>
                          <option>Florida - FL</option>
                          <option>Georgia - GA</option>
                          <option>Hawaii - HI</option>
                          <option>Idaho - ID</option>
                          <option>Illinois - IL</option>
                          <option>Indiana - IN</option>
                          <option>Iowa - IA</option>
                          <option>Kansas - KS</option>
                          <option>Kentucky - KY</option>
                          <option>Louisiana - LA</option>
                          <option>Maine - ME</option>
                          <option>Maryland - MD</option>
                          <option>Massachusetts - MA</option>
                          <option>Michigan - MI</option>
                          <option>Minnesota - MN</option>
                          <option>Mississippi - MS</option>
                          <option>Missouri - MO</option>
                          <option>Montana - MT</option>
                          <option>Nebraska - NE</option>
                          <option>Nevada - NV</option>
                          <option>New Hampshire - NH</option>
                          <option>New Jersey - NJ</option>
                          <option>New Mexico - NM</option>
                          <option>New York - NY</option>
                          <option>North Carolina - NC</option>
                          <option>North Dakota - ND</option>
                          <option>Ohio - OH</option>
                          <option>Oklahoma - OK</option>
                          <option>Oregon - OR</option>
                          <option>Pennsylvania - PA</option>
                          <option>Puerto Rico - PR</option>
                          <option>Rhode Island - RI</option>
                          <option>South Carolina - SC</option>
                          <option>South Dakota - SD</option>
                          <option>Tennessee - TN</option>
                          <option>Texas - TX</option>
                          <option>Utah - UT</option>
                          <option>Vermont - VT</option>
                          <option>Virginia - VA</option>
                          <option>Washington - WA</option>
                          <option>West Virginia - WV</option>
                          <option>Wisconsin - WI</option>
                          <option>Wyoming - WY</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" placeholder="Enter Zip Code" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <label className="mr-2">Activities</label>
                    <DualListBox lang ={{selectedHeader:'Selected Activities',
                    availableHeader: 'Available Activities'}}
                    showHeaderLabels={true}
                        options={this.state.options}
                        selected={this.state.selected}
                        onChange={this.onChange} className="mt-2" icons={{
                          moveLeft: '<',
                          moveAllLeft: '<<',
                          moveRight: '>',
                          moveAllRight: '>>'
                      }}
                    />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 m-auto">
                </div>
            </div>
            <div className="form-group row border-bottom pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label className="mr-2">Assigned Group</label>
                    <select placeholder="Select" className="form-control" name="approver">
                        <option>None</option>
                        <option>Joe Smith</option>
                        <option>Jesse Lake</option>
                    </select>
                </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Is Manager?</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>NO</option>
                    <option>YES</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <label>Timesheet Approver*</label>
                <select placeholder="Select" className="form-control" name="activity_status">
                    <option>Select</option>
                    <option>Joe Smith</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Upload Signature File*</label>
                  <input type="file" className="form-control"/>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Upload Initials File*</label>
                  <input type="file" className="form-control"/>
              </div>
            </div>
            <div className="form-group row pt-3">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <input type="button" className="btn btn-danger" value="Archive Employee" />
              </div>
             {/* <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <p>Do you want to permanently delete this activity? This cannot be undone and you will 
                  lose all data for this activity. It is recommended that you inactive the activity.</p>
                    </div> */ }
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
export default LoadEmployeesTable;