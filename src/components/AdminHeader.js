import React from 'react';
import Logo from './assets/img/footer_logo.png';
import {
  HashRouter as Router, NavLink
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import { MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

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
                        <Nav.Link as={NavLink} to="/timesheets">Timesheets</Nav.Link>
                        <Nav.Link as={NavLink} to="/organization">Organization</Nav.Link>
                        <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
                        <Nav.Link as={NavLink} to="/policies">Policies</Nav.Link>
                        <Nav.Link as={NavLink} to="/employees">Employees</Nav.Link>
                        <Nav.Link as={NavLink} to="/reporting">Reporting</Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <MDBBtnGroup className="header-dropdown">
              <MDBBtn>
                <Nav.Link as={NavLink} to="/MyProfile" className="p-0">
                  <img alt="Banner" class="header-profile-img" 
                  src={require("./assets/img/user-default.png").default} />
                </Nav.Link>
              </MDBBtn>
              <MDBDropdown>
                <MDBDropdownToggle caret  className="drop-menu-header" />
                <MDBDropdownMenu color="danger" className="header-drop-left">
                  <MDBDropdownItem>
                    <i className="fa fa-user-circle pr-2"></i>
                    Profile</MDBDropdownItem>
                  <MDBDropdownItem><i className="fa fa-sign-out pr-2"></i> Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBBtnGroup>
        </Router>
    </div>
  );
}
}
export default AdminHeader;
