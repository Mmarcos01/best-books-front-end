import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

import './Header.css';

class Header extends React.Component {
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Best Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      { isAuthenticated
        ? <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/bookshelf">Book Shelf</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <LogoutButton />
            </Nav>
          </Navbar.Collapse>
        : <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LoginButton />
            </Nav>
          </Navbar.Collapse>
      }
    </Navbar>
    );
  }
}

export default withAuth0(Header);
