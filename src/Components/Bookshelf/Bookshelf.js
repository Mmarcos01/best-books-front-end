import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import BestBooks from '../BestBooks/BestBooks';

class Bookshelf extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        {isAuthenticated ? <BestBooks /> : ''}
      </>
    );
  }
}

export default withAuth0(Bookshelf);
