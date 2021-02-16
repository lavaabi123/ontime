import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import OrganizationTabs from './components/OrganizationTabs.js';
import Footer from './components/Footer.js';

class Organization extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="contentwrapper pt-3 pb-5 mb-5">
         <OrganizationTabs />
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default Organization;
