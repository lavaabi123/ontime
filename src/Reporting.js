import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from './components/Footer.js';

class Reporting extends React.Component { 
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
isWeekday = (date) => {
    const day = date.getDay()
    return day === 0
}
ExampleCustomInput = ({ value, onClick }) => (
    <button disabled={this.state.startdisabled} className="example-custom-input form-control" style={{
        minWidth: '100px',minHeight:'32px'}} onClick={onClick}>
        {value}
    </button>
); 
render() {
  return (
    <div className="App">
      <Container>
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="contentwrapper pt-3 pb-5 mb-5">
            <h5>Timesheet Reporting</h5>
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Time Period</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" className="form-control permission-checkbox" name="country"/>
                        <label className="permission-label">Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" className="form-control permission-checkbox" name="country"/>
                        <label className="permission-label">Bi-Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" className="form-control permission-checkbox" name="country"/>
                        <label className="permission-label">Monthly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" className="form-control permission-checkbox" name="country"/>
                        <label className="permission-label">Semi-Monthly</label>
                    </div>                    
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" className="form-control permission-checkbox" name="country"/>
                        <label className="permission-label">Day to Day</label>
                    </div>
                </div>
                <div className="form-group row">
                <DatePicker selected={ this.state.startDate }
                name="startDate" className="form-control" customInput={<this.ExampleCustomInput />} 
                filterDate={this.isWeekday} onChange={ this.handleChange } className="form-control" 
                dateFormat="MM/dd/yyyy"/>
                </div>
            </form>
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default Reporting;
