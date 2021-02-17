import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {Modal,Container,Toast} from "react-bootstrap";


class TimesheetPreview extends Component {
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

  render() {
    return (
        <div className="mt-5">
        <h6 className="text-center">Report Preview</h6>
        <button onClick={() => this.setState({ showreport: true })} class="button resend-btn float-right mb-3">Save As Excel</button>
        <button onClick={() => this.setState({ showreport: true })} class="button resend-btn ml-2 float-right mb-3">Save As PDF</button>
        <div className="payrollform">
        <div className="col-12 mb-3 text-center">          
            <h6>TIMESHEET SUMMARY REPORT</h6>
        </div>
        <div id="stepper1" className="bs-stepper">
            <div className="bs-stepper-header">
                <div className="step" data-target="#test-l-1">
                <button className="step-trigger">
                    <span className="bs-stepper-label">Summary Page</span>
                </button>
                </div>
                <div className="step" data-target="#test-l-2">
                <button className="step-trigger">
                    <span className="bs-stepper-label">Detail Page</span>
                </button>
                </div>
            </div>
          <div className="bs-stepper-content">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content  pl-2 small_font">
                <table border='1' className="col-12 text-center text-black">
                    <thead>
                        <tr>
                            <th colSpan='3'>Total Summary</th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                            <th className="background-green"></th>
                        </tr>
                        <tr>
                            <th rowSpan='2'>FIRST NAME</th>
                            <th rowSpan='2'>LAST NAME</th>
                            <th rowSpan='2'>GROUP</th>
                            <th colSpan='8'>ACTIVITIES</th>
                            <th colSpan='2'>TOTAL</th>
                        </tr>
                        <tr>
                            <th>ID 1</th>
                            <th>ID 2</th>
                            <th>ID 3</th>
                            <th>ID 4</th>
                            <th>ID 5</th>
                            <th>ID 6</th>
                            <th>ID 7</th>
                            <th>ID 8</th>
                            <th>REGULAR</th>
                            <th>OVERTIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td><td>Henry</td><td>Group 1</td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div id="test-l-2" className="content  pl-2 small_font">
              <table border='1' className="col-12 text-center text-black">
                    <thead>
                        <tr>
                            <th colSpan='16'>[Group Name] [Group ID] [Activity Name] [Activity ID] EMPLOYEE NAME: [Last Name], [First Name]</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>ACTIVITY</th>
                            <th colSpan='5'>MONTH 1</th>
                            <th colSpan='6'>MONTH 2</th>
                            <th colSpan='2'>TOTAL</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 6</th>
                            <th>REGULAR</th>
                            <th>OVERTIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td></td><td className="font-weight-bold">SUMMARY</td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th colSpan='5'>MONTH 3</th>
                            <th colSpan='4'>MONTH 4</th>
                            <th></th>
                            <th></th><th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td></td><td className="font-weight-bold">SUMMARY</td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <th colSpan='16'>[Group Name] [Group ID] [Activity Name] [Activity ID] EMPLOYEE NAME: [Last Name], [First Name]</th>
                        </tr>
                        <tr>
                            <th colSpan='2'>ACTIVITY</th>
                            <th colSpan='5'>MONTH 1</th>
                            <th colSpan='6'>MONTH 2</th>
                            <th colSpan='2'>TOTAL</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 1</th>
                            <th>D 2</th>
                            <th>D 3</th>
                            <th>D 4</th>
                            <th>D 5</th>
                            <th>D 6</th>
                            <th>REGULAR</th>
                            <th>OVERTIME</th>
                        </tr>
                        <tr>
                            <td>938</td><td>OHTA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td>934</td><td>BIA</td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>
              </div>              
            </form>            
          </div>
        </div>
        <div aria-live="polite" aria-atomic="true" style={{position: 'relative',}}>
      </div>
      </div>
      </div>
    );
  }
}

export default TimesheetPreview;
