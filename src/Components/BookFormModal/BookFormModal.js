import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, Form } from 'react-bootstrap';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errors: '',
      email: this.props.auth0.user.email,
    };
  }

  handleFormInput = (e) => {
    e.preventDefault();
    if(!this.props.update) {
      this.props.handleAddBook({
        email: this.state.email,
        books: [
          {
            name: e.target.name.value,
            description: e.target.description.value,
            status: Boolean(+e.target.radiobtn.value),
          },
        ],
      });
      this.props.displayFlip();
    } else if (this.props.update) {
      this.props.handleUpdateBook({
        email: this.state.email,
        books: [
          {
            name: e.target.name.value,
            description: e.target.description.value,
            status: Boolean(+e.target.radiobtn.value),
          }
        ],
      }, this.props.bookId);
      this.props.updateFlip();
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        { isAuthenticated && !this.props.display && !this.props.update ? (
          <Modal show={!this.props.display && !this.props.update} onHide={this.props.displayFlip}>
            <Modal.Header closeButton>
              <Modal.Title>Add Books</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleFormInput}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    name='name'
                    type='text'
                    placeholder='Enter Title'
                  />
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name='description'
                    type='textarea'
                    placeholder='Enter Description'
                  />
                  <fieldset>
                    <Form.Group>
                      <Form.Check
                        type='radio'
                        name='radiobtn'
                        label='Read'
                        id='radio-read'
                        value='1'
                      />
                      <Form.Check
                        type='radio'
                        name='radiobtn'
                        label='Unread'
                        id='radio-not-read'
                        value='0'
                      />
                    </Form.Group>
                  </fieldset>
                </Form.Group>
                <button>Submit</button>
                <button onClick={this.props.displayFlip}>Close</button>
              </Form>
            </Modal.Body>
          </Modal>
        ) : isAuthenticated && !this.props.display && this.props.update ? (
          <Modal show={!this.props.display && this.props.update} onHide={this.props.updateFlip}>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleFormInput}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    name='name'
                    type='text'
                    placeholder="Updating"
                  />
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name='description'
                    type='textarea'
                    placeholder='Enter Description'
                  />
                  <fieldset>
                    <Form.Group>
                      <Form.Check
                        type='radio'
                        name='radiobtn'
                        label='Read'
                        id='radio-read'
                        value='1'
                      />
                      <Form.Check
                        type='radio'
                        name='radiobtn'
                        label='Unread'
                        id='radio-not-read'
                        value='0'
                      />
                    </Form.Group>
                  </fieldset>
                </Form.Group>
                <button>Submit</button>
                <button onClick={this.props.displayFlip && this.props.updateFlip}>Close</button>
              </Form>
            </Modal.Body>
          </Modal>
        )
          : ''
        }
      </>
    );
  }
}

export default withAuth0(BookFormModal);
