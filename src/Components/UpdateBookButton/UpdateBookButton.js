import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
class UpdateBookButton extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated && this.props.display ? (
          <Button
            cy-data='add-book'
            className='m-2'
            variant='dark'
            onClick={() => this.props.updateFlip(this.props.bookId)}
          >
            Update
          </Button>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default withAuth0(UpdateBookButton);
