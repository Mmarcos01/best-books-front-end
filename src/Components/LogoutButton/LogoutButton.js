import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

// this file came from Auth0 quickstart - Modified
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button cy-data='logout-button' className='mt-2' variant="outline-primary" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
