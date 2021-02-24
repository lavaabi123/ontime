import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal,Container,Row,Col} from "react-bootstrap";

class EmployeesList extends React.Component {
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
      holidayshow:false,
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
        label: 'Status',
        field: 'status',
      },
      {
        label: 'Wage Category',
        field: 'wage_category',
      },
      {
        label: 'Employee Type',
        field: 'emp_type',
      },
      {
        label: 'Hire Type',
        field: 'hire_type',
      },
      {
        label: 'Timing Method',
        field: 'timing',
      },
      {
        label: 'Activities',
        field: 'activity',
      },
      {
        label: 'Last Activity',
        field: 'last_act',
      },
      {
        label: '',
        field: 'edit',
        sort: 'disabled',
      },
    ],
    rows: [
      {
        name: 'Henry',
        status: 'Active',
        wage_category: 'Exempt',
        emp_type: 'Hourly',
        hire_type: '2/05/2021',
        timing: 'Punch In/Out',
        activity: 'OHTA/CLA',
        last_act: 'Punch In 02/5/2020 08:00 AM',
        edit: <i class="fa fa-lock" onClick={() => this.setState({ editshow: true })}></i>,
      },
      {
        name: 'Smith',
        status: 'Active',
        wage_category: 'Non-Exempt',
        emp_type: 'Hourly',
        hire_type: '2/05/2021',
        timing: 'Punch In/Out',
        activity: 'OHTA/CLA',
        last_act: 'Punch In 02/5/2020 08:00 AM',
        edit: <i class="fa fa-lock" onClick={() => this.setState({ editshow: true })}></i>,
      },
    ],
  }
  return (
    <div>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
        <div className="text-left float-left col-lg-9 col-md-9 col-xl-9 col-sm-12 pl-0">
            <p class="font-weight-bolder blue-color"><i className="fa fa-angle-left pr-2"></i>Activities</p>
            <span className="text-muted">
                Settings for Employees under Activity
            </span>
        </div>
      </div>
      <div>
        <h5 class="font-weight-bolder">Number of Total Employees (5)</h5>
      </div>
      <MDBDataTable hover info={false}  responsive={true} displayEntries={false} noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
     
    <Modal  scrollable={true} size="sm"
          show={this.state.holidayshow}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title className="m-auto h6" id="contained-modal-title-vcenter">
        Add Holiday
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
          <div className="form-group">
              <label for="exampleInputEmail1">Holiday Title*</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Holiday Title" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Date*</label>
              <input type="date" className="form-control" placeholder="Enter Date"/>
            </div>          
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ holidayshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ holidayshow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal  scrollable={true} size="lg" onHide={() => this.setState({ editshow: false })} 
          show={this.state.editshow}>
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
            <div className="h6">Allen, Joe - Reset Password</div>
            <p className="small_font font-weight-normal">Please enter a new temporary password for Joe Allen. For security reason, password to be changed</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
          <Row>
              <Col lg="12" md="12" sm="12">
                <div className="form-group">
                 <label for="exampleInputEmail1">Login Name</label>
                 <input type="text" className="form-control" placeholder="Default Holiday Policy" Readonly />
                </div>
              </Col>
              <Col lg="6" md="12" sm="12">
                <div className="form-group">
                 <label for="exampleInputEmail1">Reset Password</label>
                 <input type="password" className="form-control" placeholder="Enter new password" Readonly />
                </div>
              </Col>
              <Col lg="6" md="12" sm="12">
                <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                 <input type="password" className="form-control mt-2" placeholder="Confirm new password" Readonly />
                </div>
              </Col>
          </Row>
            <p className="small_font">
                You are about to reset password for this team member.
               Upan login with this new password,
               They will be given the option to update to their choice
            </p> 
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
        <li><button onClick={() => this.setState({ editshow: false })} class="button resend-btn py-2 px-4 m-0">Reset Password</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
}
export default EmployeesList;