import React from 'react';
import { Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import './Profile.css';

class Profile extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated ?
          <>
            <section className='profile-card'>
              <Card style={{ width: '18rem' }}>
                <div className='profile-img'>
                  <Card.Img className='img' src={user.picture} />
                </div>
                <Card.Body className='profile-body'>
                  <Card.Title>{user.name}</Card.Title>
                  <h6 cy-data='user-email'>{user.email}</h6>
                </Card.Body>
              </Card>
            </section>
          </> : ''}
      </>
    );
  }
}

export default withAuth0(Profile);
