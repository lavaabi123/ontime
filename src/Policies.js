import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import PoliciesTabs from './components/PoliciesTabs.js';
import Footer from './components/Footer.js';

class Policies extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="contentwrapper pt-3 pb-5 mb-5">
         <PoliciesTabs />
        </div>
      </Container>
      
    </div>
  );
  }
}

export default Policies;
