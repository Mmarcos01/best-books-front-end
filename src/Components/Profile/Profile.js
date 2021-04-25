import React from "react";
import Card from 'react-bootstrap/Card';
import './Profile.css';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated ?
          <div class='profile-card'>
            <Card style={{ width: '18rem' }}>
              <div class='profile-img'>
                <Card.Img class='img' src={user.picture} />
              </div>
              <Card.Body class='profile-body'>
                <Card.Title>{user.name}</Card.Title>
                <h6>{user.email}</h6>
                <Card.Text>
                Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card.Text>
              </Card.Body>
            </Card>
          </div> : ''}
      </>
    )
  };
}

export default withAuth0(Profile);
