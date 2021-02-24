import React from 'react';
import Logo from './assets/img/footer_logo.png';
import {
  HashRouter as Router, NavLink, Link
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import { MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class ManagerHeader extends React.Component {
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
                        <Nav.Link as={NavLink} to="/timesheets">My Timesheet</Nav.Link>
                        <Nav.Link as={NavLink} to="/MyTeam">My Team</Nav.Link> 
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
                    <Link as={Link} to="/MyProfile">
                      <MDBDropdownItem>
                      <i className="fa fa-user-circle pr-2"></i>Profile
                      </MDBDropdownItem>
                    </Link>
                    <Link as={Link} to="/login">
                  <MDBDropdownItem><i className="fa fa-sign-out pr-2"></i> Logout</MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBBtnGroup>
        </Router>
    </div>
  );
}
}
export default ManagerHeader;
