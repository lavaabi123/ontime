import React from 'react';
import Logo from './assets/img/footer_logo.png';
import {
  HashRouter as Router, NavLink
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';

class AdminHeader extends React.Component {
render() {
  return (
    <div>
        <Router>
            <Navbar expand="lg" sticky="top" className="p-0">
                <Navbar.Brand href="#home"><img src={Logo} width="100%" alt="Logo"/>
                <span class="small_font text-white">OnTime</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white mr-1" />
                <Navbar.Collapse id="basic-navbar-nav" className="ml-0">
                    <Nav className="float-left">
                        <Nav.Link as={NavLink} to="/index">Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/account_created">Timesheets</Nav.Link>
                        <Nav.Link as={NavLink} to="/organization">Organization</Nav.Link>
                        <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
                        <Nav.Link as={NavLink} to="/policies">Policies</Nav.Link>
                        <Nav.Link as={NavLink} to="/employees">Employees</Nav.Link>
                        <Nav.Link as={NavLink} to="/reporting">Reporting</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <img alt="Banner" class="user-image" width="15%" src={require("./assets/img/user-default.png").default} />
            <span class="downicon"><i className="fa fa-angle-down"></i></span>  
        </Router>
    </div>
  );
}
}
export default AdminHeader;
