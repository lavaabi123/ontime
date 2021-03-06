import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "react-datepicker/dist/react-datepicker.css";
/* import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; */
import '../App.css';
import {Modal,} from "react-bootstrap";
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

class LoadEmployeesGroupTable extends React.Component {
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
        { value: 'one', label: 'Activity 1' },
        { value: 'two', label: 'Activity 2' },
      ],
      empselected: ['two'],
      empoptions : [
        { value: 'one', label: 'Employee 1' },
        { value: 'two', label: 'Employee 2' },
      ]
    };
  } 
  onChange = (selected) => {
    this.setState({ selected });
  };
  onChangeEmp = (empselected) => {
    this.setState({ empselected });
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
            label: 'Group ID',
            field: 'id',
          },
      {
        label: 'Group Name',
        field: 'name',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
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
        id: '1',
        name: 'Henry',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        id: '1',
        name: 'John Smith',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
      {
        id: '1',
        name: 'Helen',
        edit: <i class="fa fa-edit" onClick={() => this.setState({ editshow: true })}></i>,
        delete: <i class="fa fa-trash"></i>,
      },
    ],
  }
  return (
    <div>
      <div class="col-12 row mr-0 pr-0 pl-0 ml-0 mb-3">
        <h6 class="text-left float-left col-lg-9 col-md-9 col-xl-9 col-sm-12 pl-0">Employee Group List</h6>
        <button onClick={() => this.setState({ show: true })} class="button resend-btn py-2 px-4 col-lg-3 col-xl-3 col-md-3 col-sm-12 m-0"><i class="fa fa-plus pr-2"></i>Add Employee Group</button>
      </div>
      <MDBDataTable  hover info={false}  responsive={true} displayEntries={false} noBottomColumns entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searching={false} />
      <Modal scrollable={true} size="lg"  onHide={() => this.setState({ show: false })} 
          show={this.state.show}>
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="contained-modal-title-vcenter">
        Add Employee Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
            <div className="form-group row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Group ID*</label>
                <input type="text" className="form-control" placeholder="Enter Group ID" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Group Name*</label>
                <input type="text" className="form-control" placeholder="Enter Group Name" />
              </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label className="mr-2">Employees</label>
                    <DualListBox  lang ={{selectedHeader:'Selected Employees',
                    availableHeader: 'Available Employees'}}
                    showHeaderLabels={true} 
                        options={this.state.empoptions}
                        selected={this.state.empselected}
                        onChange={this.onChangeEmp} className="mt-2" icons={{
                          moveLeft: '<',
                          moveAllLeft: '<<',
                          moveRight: '>',
                          moveAllRight: '>>'
                      }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label className="mr-2">Activities</label>
                    <DualListBox  lang ={{selectedHeader:'Selected Activities',
                    availableHeader: 'Available Activities'}} showHeaderLabels={true} 
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
        Edit Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font px-5">
        <div className="form-group row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Group ID*</label>
                <input type="text" className="form-control" placeholder="Enter Group ID" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <label>Group Name*</label>
                <input type="text" className="form-control" placeholder="Enter Group Name" />
              </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label className="mr-2">Employees</label>
                    <DualListBox  lang ={{selectedHeader:'Selected Employees',
                    availableHeader: 'Available Employees'}} showHeaderLabels={true} 
                        options={this.state.empoptions}
                        selected={this.state.empselected}
                        onChange={this.onChangeEmp} className="mt-2" icons={{
                          moveLeft: '<',
                          moveAllLeft: '<<',
                          moveRight: '>',
                          moveAllRight: '>>'
                      }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label className="mr-2">Activities</label>
                    
                    <DualListBox  lang ={{selectedHeader:'Selected Activities',
                    availableHeader: 'Available Activities'}} showHeaderLabels={true} 
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
export default LoadEmployeesGroupTable;