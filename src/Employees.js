import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import LoadEmployeesTable from './components/LoadEmployeesTable.js';
import LoadEmployeesGroupTable from './components/LoadEmployeesGroupTable.js';
import Footer from './components/Footer.js';

class Employees extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>   
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="content">
        <div className="contentwrapper pt-3 pb-5 mb-5">
            <LoadEmployeesGroupTable />
        </div>
        <div className="contentwrapper pt-3 pb-5 mb-5">
        <LoadEmployeesTable />
        </div>
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default Employees;
