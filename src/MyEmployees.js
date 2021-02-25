import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ManagerHeader from './components/ManagerHeader.js';
import MyTeamTabs from './components/MyTeamTabs.js';
import Footer from './components/Footer.js';

class MyTeam extends React.Component {  
render() {
  return (
    <div className="App">
      <Container>   
        <header className="admin-header">
            <ManagerHeader />
        </header>
        <div className="content">
        <div className="contentwrapper pb-5 mb-5">
         <MyTeamTabs />
        </div>
        </div>
      </Container>
      
    </div>
  );
  }
}

export default MyTeam;
