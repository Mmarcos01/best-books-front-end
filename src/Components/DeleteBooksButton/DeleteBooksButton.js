import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
class DeleteBooksButton extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated ? (
          <Button onClick={() => this.props.deleteBook(this.props.bookId)} className='m-2' variant='danger'>
            Delete
          </Button>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default withAuth0(DeleteBooksButton);
