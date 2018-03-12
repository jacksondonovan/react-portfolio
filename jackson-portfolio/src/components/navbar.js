import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Jackson Donovan</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/">Gallery</Link>
          </NavItem>
          <NavItem eventKey={1} href="#">
            <Link to="/about">My Interests</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/contact">Contact Me</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
