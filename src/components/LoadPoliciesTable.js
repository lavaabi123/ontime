import React from 'react';
import { MDBDataTable,} from 'mdbreact';
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal,} from "react-bootstrap";

class LoadPoliciesTable extends React.Component {
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
        label: 'Policy Name',
        field: 'name',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Policy Description',
        field: 'description',
      },
      {
        label: 'Punch Type to Round',
        field: 'punch',
      },
      {
        label: 'How to Round',
        field: 'round',
      },
      {
        label: 'Round Interval',
        field: 'interval',
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
        description: 'The Policy is for On Time',
        punch: 'Active',
        round: '1',
        interval: 'Duty',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'John Smith',
        description: 'The Policy is for On Time',
        punch: 'Active',
        round: '2',
        interval: 'Duty',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        name: 'Helen',
        description: 'The Policy is for On Time',
        punch: 'In-Active',
        round: '3',
        interval: 'Duty',
        edit: <i class="fa fa-edit"  onClick={() => this.setState({ editshow: true })} ></i>,
        delete: <i class="fa fa-trash"></i>,
      },
    ],
  }
  return (
    <div>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
          <div className="text-left float-left col-lg-9 col-md-9 col-xl-9 col-sm-12 pl-0">
            <h6 class="">Time Clock Rounding Policies</h6>
            <span className="text-muted">These Policies affect how time is rounded when punching in or out </span>
          </div>
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-3 col-xl-3 col-md-3 col-sm-12 m-0">
            <i class="fa fa-plus pr-2"></i>Add New Rounding Policy</button>
      </div>
      <MDBDataTable hover info={false}  responsive={true} displayEntries={false} noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searching={false} />
      <Modal scrollable={true}  size="lg"  onHide={() => this.setState({ show: false })} 
          show={this.state.show}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        Add Policies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
          <div className="form-group">
              <label for="exampleInputEmail1">Policy Name*</label>
              <input type="text" className="form-control" placeholder="Default Rounding Policy" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Policy Description</label>
              <textarea type="email" className="form-control" placeholder="This is the Default Rounding Policy"></textarea>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Punch type to Round</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>All</option>
                        <option>Option 2</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>How to Round</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>Always Round Up</option>
                        <option>Option 2</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Round Interval</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>To Nearest 5 Min</option>
                        <option>Option 2</option>
                    </select>
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
        Edit Rounding Policies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
      <div className="form-group">
              <label for="exampleInputEmail1">Policy Name*</label>
              <input type="text" className="form-control" placeholder="Default Rounding Policy" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Policy Description</label>
              <textarea type="email" className="form-control" placeholder="This is the Default Rounding Policy"></textarea>
            </div>
            <div className="form-group row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Punch type to Round</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>All</option>
                        <option>Option 2</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>How to Round</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>Always Round Up</option>
                        <option>Option 2</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Round Interval</label>
                    <select placeholder="Select" className="form-control" name="activity_status">
                        <option>To Nearest 5 Min</option>
                        <option>Option 2</option>
                    </select>
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
export default LoadPoliciesTable;