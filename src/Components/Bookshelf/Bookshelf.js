import React from 'react'
import { withAuth0 } from '@auth0/auth0-react';

class Bookshelf extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return( 
    <> 
      {isAuthenticated ? <h1>BookShelf</h1> : ''} 
    </>
    )
  };
}

export default withAuth0(Bookshelf);
