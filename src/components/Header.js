import React from 'react';
import Logo from './assets/img/logo.png';
import {
  HashRouter as Router, NavLink, Link
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';

class Header extends React.Component {
	render() {
  return (
    <div>
            <Router>
                <Navbar expand="lg" sticky="top" className="container">
                    <Navbar.Brand href="#home"><img src={Logo} width="100%" alt="Logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                        <Nav.Link as={NavLink} to="/index">Tour</Nav.Link>
                        <Nav.Link as={NavLink} to="/account_created">Case Studies</Nav.Link>
                        <Nav.Link href="/contact-us">Blog</Nav.Link>
                        <Nav.Link href="/contact-us">Support</Nav.Link>
                        <Nav.Link as={NavLink} to="/login" className="signindiv">
                          <input type="submit" className="button signin-btn"  value="Sign In"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Router>
</div>
  );
}
}
export default Header;
