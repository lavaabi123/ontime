import React from 'react';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from 'bs-stepper';
import '../App.css';

class ActivityList extends React.Component {
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper4'), {
          linear: false,
          animation: true
        })
      }
  render() {
    return (
        <div>
        <div>
            <h6 class="font-weight-bolder">OHTA(5) - Activity Policies</h6>
        </div>
        <div id="stepper4" className="bs-stepper payrollform">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test11">
              <button className="step-trigger">
                <span className="bs-stepper-label4">Rounding Policy</span>
              </button>
            </div>
            <div className="step" data-target="#test12">
              <button className="step-trigger">
                <span className="bs-stepper-label4">Holiday Policy</span>
              </button>
            </div>

          </div>
          <div className="stepper-content">
              <div id="test11" className="content small_font ml-4">
<p><b>Policy Name : </b>OHTA Timeclock Rounding Policy</p>
<p><b>Status : </b><span className="label label-success">Enabled</span></p>
<p><b>Policy Description : </b>This policy rounds the punches of employees who use the time clock to punch in and out to the nearest 0.25 hour. The rounding is performed using a 7/8 split method, meaning any punch 7 minutes or under rounds down, and 8 minutes or up rounds up. </p>
<p><b>Punch Type to Round : </b>All</p>
<p><b>How to Round : </b>7/8 Split Round</p>
<p><b>Round Interval : </b>Nearest 15 minutes</p>
             </div>
              <div id="test12" className="content small_font ml-4">
              <p><b>Policy Name : </b>OHTA Holiday Policy</p>
<p><b>Status : </b><span className="label label-success">Enabled</span></p>
<p><b>Policy Description : </b>OHTA employees are allowed paid holidays for all federally recognized holidays </p>
<p><b>Reoccuring Holidays : </b>New Year's Day, Martin Luther King Jr. Day, Washington's Birthday, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving Day, Christmas Day</p>
<p><b>Minimum days employed before active : </b>90 days</p>
              </div>
           </div>
          </div>
        </div>
    );
  }
}
export default ActivityList;