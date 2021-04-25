import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

// this file came from Auth0 quickstart - Modified
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button cy-data='login-button' className='mt-2' variant="outline-primary" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
