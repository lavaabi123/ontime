import React from 'react';
import { MDBDataTable,MDBTooltip, MDBBtn  } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal, Row,Col,Nav, Card} from "react-bootstrap";
import { NavLink} from "react-router-dom";

class LoadMyTeamTable extends React.Component {
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
      approvedcount:false,
      archivedcount:false
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
    <button className="example-custom-input form-control" style={{
      minWidth: '135px',minHeight:'37px'
    }} onClick={onClick}>
      {value}
    </button>
  );
  isWeekday1 = (date) => {
    const day = date.getDay()
    return day === 6
  }
  ExampleCustomInput1 = ({ value, onClick }) => (
    <button  className="example-custom-input form-control" style={{
      minWidth: '135px',minHeight:'37px'
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
<<<<<<< HEAD
    let datatable = {
      columns: [
        {
          label: <input type="checkbox" />,
          field: 'check',
        },
        {
          label: 'Week Start',
          field: 'start',
          width: '10%',
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
          field: 'overtime',
        },
        {
          label: 'Max OT Allowed',
          field: 'maxot',
        },
        {
          label: 'Regular Hours <=40',
          field: 'regular',
        },
        {
          label: <span>OHTA Hours<i class="fa fa-clock-o ml-1 text-danger"></i></span>,
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
      ],
      rows: [
        {
          check: <input type="checkbox" />,
          start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><i class="fa fa-clock-o mr-1 text-danger"></i>4/24/2020</Nav.Link>,
          status: 'Active',
          last_name: 'Allen',
          first_name: 'Joe',
          total: '36.25',
          overtime: '0.00',
          maxot: '0.00',
          regular: '36.25',
          ohta: '28.25',
          cla: '7.75',
          holiday: '0.00',
          pto: '0.25',
        },
        {
          check: <input type="checkbox" />,
          start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><span className="ml-3">4/24/2020</span></Nav.Link>,
          status: 'Active',
          last_name: 'Allen',
          first_name: 'Joe',
          total: '36.25',
          overtime: 'N/A',
          maxot: '0.00',
          regular: '36.25',
          ohta: '28.25',
          cla: '7.75',
          holiday: '0.00',
          pto: '0.25',
        },
        {
          check: <input type="checkbox" />,
          start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><i class="fa fa-exclamation-triangle mr-1 text-warning"></i>4/24/2020</Nav.Link>,
          status: 'Not Submitted',
          last_name: 'Allen',
          first_name: 'Joe',
          total: '36.25',
          overtime: '0.00',
          maxot: '0.00',
          regular: '36.25',
          ohta: '28.25',
          cla: '7.75',
          holiday: '0.00',
          pto: '0.25',
        },
      ],
    }
=======
  let datatable = {
    columns: [
      {
        label: <input type="checkbox" />,
        field: 'check',
      },
      {
        label: 'Week Start',
        field: 'start',
        width: '10%',
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
        field: 'overtime',
      },
      {
        label: 'Max OT Allowed',
        field: 'maxot',
      },
      {
        label: 'Regular Hours <=40',
        field: 'regular',
      },
      {
        label: <span>OHTA Hours<i class="fa fa-clock-o ml-1 text-danger"></i></span>,
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
    ],
    rows: [
      {
        check: <input type="checkbox" />,
        start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><i class="fa fa-clock-o mr-1 text-success"></i>4/24/2020</Nav.Link>,
        status: 'Active',
        last_name: 'Allen',
        first_name: 'Joe',
        total: '36.25',
        overtime: '0.00',
        maxot: '0.00',
        regular: '36.25',
        ohta: '28.25',
        cla: '7.75',
        holiday: '0.00',
        pto: '0.25',
      },
      {
        check: <input type="checkbox" />,
        start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><span className="ml-3">4/24/2020</span></Nav.Link>,
        status: 'Active',
        last_name: 'Allen',
        first_name: 'Joe',
        total: '36.25',
        overtime: 'N/A',
        maxot: '0.00',
        regular: '36.25',
        ohta: '28.25',
        cla: '7.75',
        holiday: '0.00',
        pto: '0.25',
      },
      {
        check: <input type="checkbox" />,
        start: <Nav.Link as={NavLink} to="/TimesheetChart" className="small_font text-decoration-underline blue-color p-0"><i class="fa fa-exclamation-triangle mr-1 text-warning"></i>4/24/2020</Nav.Link>,
        status: 'Not Submitted',
        last_name: 'Allen',
        first_name: 'Joe',
        total: '36.25',
        overtime: '0.00',
        maxot: '0.00',
        regular: '36.25',
        ohta: '28.25',
        cla: '7.75',
        holiday: '0.00',
        pto: '0.25',
      },
    ],
  }
>>>>>>> 9f20cabb4182cb53edd25700d8d87d4750875ab7
  return (
    <div>
      <Card className="p-3 mb-3 small_font bg-amber border-0">
        <Row>
          <Col lg="3" md="3" sm="12" style={{marginTop:'2.5%'}}>
          <input style={{float:'left',width:'25px',marginTop:'3px'}} type="checkbox" name="" class="form-control" /><label>All Active Timesheets</label>            
          </Col>
          <Col lg="2" md="2" sm="12">
              <label className="pr-2">Start Week</label>
              <DatePicker selected={ this.state.startDate }
          name="startDate" className="form-control" customInput={<this.ExampleCustomInput />} 
          filterDate={this.isWeekday} onChange={ this.handleChange } className="form-control" 
          dateFormat="MM/dd/yyyy" placeholderText="MM/dd/yyyy"/>
          </Col>
          <Col lg="2" md="2" sm="12">
            <label className="pr-2">End Week</label>
                <DatePicker selected={ this.state.startDate1 }
            name="startDate" className="form-control" customInput={<this.ExampleCustomInput1 />} 
            filterDate={this.isWeekday} onChange={ this.handleChange1 } className="form-control" 
            dateFormat="MM/dd/yyyy" placeholder="MM/dd/yyyy"/>
          </Col>
          <Col lg="2" md="2" sm="12">
            <label>Activity:</label>
            <select placeholder="Select" className="form-control" name="state">
                <option>All</option>
                <option>option 1</option>
            </select>
          </Col>
          <Col lg="2" md="2" sm="12">
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
        </div>
<<<<<<< HEAD
        <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 px-1">
          </div>
        <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 px-1">
          <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-3 m-0 float-right">Mass Time Entry<i class="fa fa-book pl-2"></i></button>
        </div>
=======
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-2 col-xl-2 col-md-2 col-sm-12 m-0">Mass Time Entry<i class="fa fa-book pl-2"></i></button>
>>>>>>> 9f20cabb4182cb53edd25700d8d87d4750875ab7
      </div>
      <MDBDataTable bordered hover info={false} className="activitytable timesheets"  responsive={true} displayEntries={false} 
      noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} 
      data={datatable} searching={false} />
<<<<<<< HEAD
=======

      <div class="col-12 row mt-4" style={this.state.archivedcount === true ? {} : { display: 'none' }}>
        <div class="col-lg-8 col-md-8 col-xl-8 col-sm-12 pl-0 pr-0">
          <table class="table table-bordered table-hover dataTable timesheets1">
            <thead data-test="datatable-head">
              <tr>
              <th class="sorting">Archivable Timesheet Count</th>
              <th class="sorting">15</th>
              <th><button onClick={() => this.setState({ show: false })} class="button resend-btn py-2 px-4 ml-5 mt-0">Move to Archived</button>
              </th>
              </tr>
              <tr>
              <th class="sorting">Not Archivable Timesheet Count</th>
              <th class="sorting">25</th>
              <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
>>>>>>> 9f20cabb4182cb53edd25700d8d87d4750875ab7
      <Modal  scrollable={true} size="md"  onHide={() => this.setState({ show: false })} 
          show={this.state.show}>
      <Modal.Header closeButton className="h6 background-blue1">
        <Modal.Title className="h6 text-white" id="contained-modal-title-vcenter">
<<<<<<< HEAD
        Mass Time Entry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
        <p className="xs_font text-dark text-center">Add a punch or time entry for the 4 selected employees for the week of:</p>
        <p className="small_font font-weight-bold text-center">Sun Apr 24, 2016 - Mon Apr 25, 2016</p>
        <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Date:</label>
            <input type="date" className="form-control" placeholder="04/24/2016" />
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Activity Name:</label>
            <select className="form-control">
              <option>OHTA</option>
              <option>Type 1</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Time:</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Comments*:</label>
            <textarea type="email" className="form-control" placeholder="Enter Activity Description"></textarea>
        
          </div>           
        </div>
          <p className="small_font text-center">If there is support document, please<span className="pl-1 link-style text-decoration-underline">upload</span></p>
          </Modal.Body>
      <Modal.Footer>
      <div class="col-12 row mt-2">
        <p className="small_font text-dark text-center mx-auto mb-2">Are you sure you would like to continue with this mass time entry?</p>
      
=======
        Extra Hour Allowance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
        <p className="xs_font text-dark text-center">
          <span className="font-weight-bold">Mary Campbell</span> has <span className="text-success font-weight-bold">been approved</span> for overtime this week and has currently used 
          2.25 hours of the 20:00 overtime hours allowed. Would you like to modify the overtime allowance for this employee?
        </p>
        <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Modify Begin Date:</label>
            <input type="date" className="form-control" placeholder="04/24/2016" />
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <label for="exampleInputEmail1">Modify End Date:</label>
            <input type="date" className="form-control" placeholder="04/24/2016" />
          </div>
        </div>
        <p className="xs_font text-dark text-center">
          Modify the max overtime hours allowed for this employee during the time period:
        </p>
        <div className="form-group row">
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12">
            <input type="text" className="form-control float-right col-lg-6 col-md-6 col-xl-6" placeholder="" />
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 pl-0">
          <p className="xs_font text-dark text-center mt-2">
            Total Overtime Hours for this employee
          </p>
          </div>           
        </div>
          </Modal.Body>
      <Modal.Footer>
      <div class="col-12 row mt-2">
      <p className="xs_font text-dark text-center mt-2">
          Please note that this will overwrite any previous overtime allowance for this employee.<br />
           Are you sure you would like to continue?
        </p>
>>>>>>> 9f20cabb4182cb53edd25700d8d87d4750875ab7
        <div className="col-6"><button className="button resend-btn background-red px-2 float-left">No Cancel</button></div>
        <div className="col-6"><button className="button resend-btn float-right px-4">Yes, Continue</button></div>
      </div>
      </Modal.Footer>
<<<<<<< HEAD
    </Modal>  
=======
    </Modal>    
>>>>>>> 9f20cabb4182cb53edd25700d8d87d4750875ab7
    </div>
  );
}
}
export default LoadMyTeamTable;