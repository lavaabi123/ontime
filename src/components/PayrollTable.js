import React from 'react';
import { MDBDataTable,} from 'mdbreact';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import {Modal,} from "react-bootstrap";

class PayrollTable extends React.Component {
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
  
  return (
    <div className="mt-5">
        <h6 className="text-center">Report Preview</h6>
        <button onClick={() => this.setState({ showreport: true })} class="button resend-btn float-right mb-3">Save As Excel</button>
        <button onClick={() => this.setState({ showreport: true })} class="button resend-btn ml-2 float-right mb-3">Save As PDF</button>
    <div className="payrollform">
      <div className="col-12 mb-3 text-center">          
        <h6>PAYROLL SUMMARY REPORT</h6>
      </div>
      <table border='1' className="text-center text-black">
          <thead>
            <tr>
                <th rowSpan='2'></th>
                <th colSpan='2' rowSpan='2'>NAME</th>
                <th rowSpan='3'>FINAL REG HOURS</th>
                <th rowSpan='3'>EVENT ATTENTION</th>
                <th rowSpan='3'>HOURS ADJUST</th>
                <th colSpan='11'>FROM MM/DD/YYYY TO MM/DD/YYYY</th>
            </tr>
            <tr>
                <th rowSpan='2'>TOTAL</th>
                <th rowSpan='2'>TOTAL REG LABOR</th>
                <th colSpan='2'>DUTY</th>
                <th>PTO</th>
                <th>HOLIDAY</th>
                <th>G&A</th>
                <th>OH</th>
                <th>LWOP</th>
                <th>EXTRA MILE</th>
                <th>OTHER</th>
            </tr>
            <tr>
                <th>GROUP ID</th>
                <th>LAST NAME</th>
                <th>FIRST NAME</th>
                <th>ACTIVITY ID 1</th>
                <th>ACTIVITY ID 2</th>
                <th>PTO ID</th>
                <th>HOLIDAY ID</th>
                <th>G&A ID</th>
                <th>OH ID</th>
                <th>LWOP ID</th>
                <th>EXTRA MILE ID</th>
                <th>OTHER ID</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>CA 958</td><td>Chambers</td><td>Robert</td><td className="background-blue">40.00</td><td></td><td></td>
                  <td>40.00</td><td>40.00</td><td>20.00</td><td>20.00</td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td>CA 958</td><td>Chambers</td><td>Robert</td><td className="background-blue">40.00</td><td></td><td></td>
                  <td>40.00</td><td>40.00</td><td>20.00</td><td>20.00</td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td>AFMOA 952</td><td>Bodenhausen</td><td>Marcelle</td><td className="background-blue">0.00</td><td></td><td></td>
                  <td>0.00</td><td>0.00</td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td>AFMOA 952</td><td>Bentley</td><td>Erica</td><td className="background-blue">0.00</td>
                  <td></td><td></td>
                  <td>0.00</td><td>0.00</td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr><tr>
                  <td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td></td><td>Bodenhausen</td><td>Marcelle</td><td className="background-blue">0.00</td>
                  <td className="background-green">Start 6/1</td><td></td>
                  <td>0.00</td><td>0.00</td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td></td><td>Bentley</td><td>Erica</td><td className="background-blue">0.00</td>
                  <td></td><td></td>
                  <td>0.00</td><td>0.00</td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr className="background-blue">
                  <td></td><td className="font-weight-bold">Total</td><td></td><td className="font-weight-bold">80.00</td><td></td><td></td>
                  <td className="font-weight-bold">80.00</td><td className="font-weight-bold">80.00</td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                  <td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                    <td></td><td className="background-green"></td><td>New Hire</td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td>
              </tr>
              <tr>
                    <td></td><td className="background-orange"></td><td>Attention</td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td>
              </tr>
              <tr>
                    <td></td><td className="background-red"></td><td>Terminated</td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  <td></td><td></td><td></td>
              </tr>
          </tbody>
      </table>
      <Modal  size="lg"  onHide={() => this.setState({ show: false })} 
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
    <Modal  size="lg" onHide={() => this.setState({ editshow: false })} 
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
    </div>
  );
}
}
export default PayrollTable;