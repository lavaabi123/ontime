import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PayrollTable from './components/PayrollTable.js';
import TimesheetPreview from './components/TimesheetPreview.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ReportingSection extends React.Component { 
constructor(props) {
    super(props);
    this.state = {
        startDate: null,
        endDate: null,
        semiMonthlyDate: null,
        MonthlyDate: null,
        weeklyDate: null,
        biWeeklyDate: null,
        TimePeriod: 'weekly',
        includesReport: 'allemployees',
        reportingHours: 'allhours',
        packEmployees: 'alphabet',
        preview: 'timesheet',
        showreport: '',
        showreportcss: false,
    };
} 
loadPreview = (e) => {
    e.preventDefault();
    this.setState({ 
        showreport: this.state.preview,
        showreportcss:true,
    });
}
isWeekday = (date) => {
    const day = date.getDay()
    return day === 0
}
isMonthly = (date) => {
    const day = date.getDate()
    return day === 1
}
isSemiMonthly = (date) => {
    const day = date.getDate()
    return day === 1 || day === 16;
}
handleOnChange = (e) => {
  this.setState({
    preview: e.target.value
  })
}
render() {
  return (
        <div className="contentwrapper pt-3 pb-5 mb-5 text-left small_font">
            <h5 className="mt-2">Timesheet Reporting</h5>
            <form onSubmit={this.onSubmit} className="payrollform">
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Time Period</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" defaultChecked value="weekly" onClick={() => this.setState({ TimePeriod: 'weekly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="biweekly" onClick={() => this.setState({ TimePeriod: 'biweekly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Bi-Weekly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="monthly" onClick={() => this.setState({ TimePeriod: 'monthly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Monthly</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="semimonthly" onClick={() => this.setState({ TimePeriod: 'semimonthly' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Semi-Monthly</label>
                    </div>                    
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="daytoday" onClick={() => this.setState({ TimePeriod: 'daytoday' })} className="form-control permission-checkbox" name="timeperiod"/>
                        <label className="permission-label">Day to Day</label>
                    </div>
                </div>
                <div className="form-group row col-12 weekly" style={this.state.TimePeriod === 'weekly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Weekly Date</label>
                    <DatePicker  selected={this.state.weeklyDate} onChange={date => this.setState({weeklyDate: date})}  
                    name="startDate" className="form-control ml-2" 
                    filterDate={this.isWeekday} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 biweekly" style={this.state.TimePeriod === 'biweekly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Bi-Weekly Date</label>
                    <DatePicker  selected={this.state.biWeeklyDate} onChange={date => this.setState({biWeeklyDate: date})}  
                    name="startDate" className="form-control ml-2" 
                    filterDate={this.isWeekday} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 monthly" style={this.state.TimePeriod === 'monthly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Monthly Date</label>
                    <DatePicker  selected={this.state.MonthlyDate} onChange={date => this.setState({MonthlyDate: date})} 
                    name="startDate" className="form-control ml-2"  
                    filterDate={this.isMonthly} dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 semimonthly" style={this.state.TimePeriod === 'semimonthly' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Semi-Monthly Date</label>
                    <DatePicker selected={this.state.semiMonthlyDate} onChange={date => this.setState({semiMonthlyDate: date})} 
                    name="startDate" className="form-control ml-2" filterDate={this.isSemiMonthly} 
                    dateFormat="MM/dd/yyyy"/>
                </div>
                <div className="form-group row col-12 daytoday" style={this.state.TimePeriod === 'daytoday' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Day to Day Date</label>
                    <DatePicker  className="form-control ml-2" placeholderText="Start Date"
                        selected={this.state.startDate}
                        onChange={date => this.setState({startDate: date})}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                    />
                    <DatePicker  className="form-control ml-4" placeholderText="End Date"
                        selected={this.state.endDate}
                        onChange={date => this.setState({endDate: date})}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        minDate={this.state.startDate}
                    />
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Report Includes</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="allemployees" defaultChecked onClick={() => this.setState({ includesReport: 'allemployees' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">All Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" onClick={() => this.setState({ includesReport: 'groups' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Groups</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="activities" onClick={() => this.setState({ includesReport: 'activities' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Activities</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="individuals" onClick={() => this.setState({ includesReport: 'individuals' })} className="form-control permission-checkbox" name="reportincludes"/>
                        <label className="permission-label">Individuals</label>
                    </div> 
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'allemployees' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Group</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Group 1</option>
                        <option>Group 2</option>
                    </select>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Activities</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Activity 1</option>
                        <option>Activity 2</option>
                    </select>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee Type</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="active" defaultChecked className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Active Employees</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="checkbox" value="inactive"  className="form-control permission-checkbox" name="employee_type"/>
                        <label className="permission-label">Inactive Employees</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.includesReport === 'individuals' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Employee</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Employee 1</option>
                        <option>Employee 2</option>
                    </select>
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Hours to be Reported</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="allhours" defaultChecked onClick={() => this.setState({ reportingHours: 'allhours' })} className="form-control permission-checkbox" name="reportinghours"/>
                        <label className="permission-label">All Hours</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="activities" onClick={() => this.setState({ reportingHours: 'activities' })} className="form-control permission-checkbox" name="reportinghours"/>
                        <label className="permission-label">Activities</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.reportingHours === 'activities' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Select Activities</label>
                    <select className="form-control col-xl-2 col-lg-2 col-md-2 col-sm-10 ml-2" multiple='multiple'>
                        <option>Activity 1</option>
                        <option>Activity 2</option>
                    </select>
                </div>
                <div className="form-group row col-12">
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Pack Employees in Report</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="alphabet" defaultChecked onClick={() => this.setState({ packEmployees: 'alphabet' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Alphabetically</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" onClick={() => this.setState({ packEmployees: 'groups' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Groups</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="wage" onClick={() => this.setState({ packEmployees: 'wage' })} className="form-control permission-checkbox" name="packemployees"/>
                        <label className="permission-label">Wage Category</label>
                    </div>
                </div>
                <div className="form-group row col-12" style={this.state.packEmployees === 'groups' ? {} : { display: 'none' }}>
                    <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">How to Pack within Group</label>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="alphabet" defaultChecked className="form-control permission-checkbox" name="packemployeesgroup"/>
                        <label className="permission-label">Alphabetically</label>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
                        <input type="radio" value="groups" className="form-control permission-checkbox" name="packemployeesgroup"/>
                        <label className="permission-label">Wage Category</label>
                    </div>
                </div>
                <div className="form-group row col-12">
                        <label className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0 permission-label">Report Type</label>
                        <select onChange={this.handleOnChange} className="form-control col-xl-6 col-lg-6 col-md-6 col-sm-10 ml-2">
                            <option value="">Select</option>
                            <option value="timesheet">Get Timesheet Report: Spreadsheet and/or PDF</option>
                            <option value="original">Get Original Timesheet Receipt: PDF only</option>
                            <option value="payroll">Get Payroll Report: Spreadsheet and/or PDF</option>
                            <option value="quickbook">Get Export Report for QuickBook: Spreadsheet</option>
                        </select>
                </div>
                <div className="form-group row col-12 h-auto m-auto pt-3">
                    <button onClick={this.loadPreview} class="button resend-btn m-auto">Generate Report</button>
                </div>
            </form>
            <div style={this.state.showreport === 'payroll' && this.state.showreportcss === true ? {} : { display: 'none' }} >
            <PayrollTable />
            </div>
            <div style={this.state.showreport === 'timesheet' && this.state.showreportcss === true ? {} : { display: 'none' }} >
            <TimesheetPreview />
            </div>
        </div>
  );
  }
}

export default ReportingSection;
