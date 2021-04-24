import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0, isAuthenticated } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton/LoginButton';
import LogoutButton from './Components/LogoutButton/LogoutButton';

class Header extends React.Component {
  
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <div> {isAuthenticated ? <LogoutButton /> : <LoginButton />} </div>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
