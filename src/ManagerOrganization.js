import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ManagerHeader from './components/ManagerHeader.js';
import Footer from './components/Footer.js';

class ManagerOrganization extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>
        <header className="admin-header">
            <ManagerHeader />
        </header>
        <div className="contentwrapper pt-3 pb-5 mb-5">
        </div>
      </Container>
      
    </div>
  );
  }
}

export default ManagerOrganization;
