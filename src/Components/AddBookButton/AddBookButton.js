import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class AddBookButton extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated && this.props.display ? (
          <Button
            cy-data='add-book'
            className='m-2'
            variant='dark'
            onClick={this.props.displayFlip}
          >
            Add Book
          </Button>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default withAuth0(AddBookButton);
