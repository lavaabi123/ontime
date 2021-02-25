import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import PayrollTable from './components/PayrollTable.js';
import TimesheetPreview from './components/TimesheetPreview.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from './components/Footer.js';
import ReportingSection from './ReportingSection.js';

class Reporting extends React.Component { 
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
    <div className="App">
      <Container>
        <header className="admin-header">
            <AdminHeader />
        </header>
        <ReportingSection />
      </Container>
      
    </div>
  );
  }
}

export default Reporting;
