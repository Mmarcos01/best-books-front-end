import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import AddBookButton from '../AddBookButton/AddBookButton';
import BookFormModal from '../BookFormModal/BookFormModal';
import DeleteBooksButton from '../DeleteBooksButton/DeleteBooksButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Bestbooks.css';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errors: '',
      email: this.props.auth0.user.email,
      display: true,
    };
  }

  displayFlip = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  handleAddBook = async (bookObject) => {
    try {
      let bookData = await axios.post(`${SERVER_URL}/books`, bookObject);
      this.setState({
        books: bookData.data,
      });
    } catch (err) {
      this.setState({
        errors: err.toString(),
      });
    }
  };

  handleDeleteBook = async (id) => {
    try {
      let bookData = await axios.delete(
        `${SERVER_URL}/books/${id}?email=${this.state.email}`
      );
      this.setState({
        books: bookData.data,
      });
    } catch (err) {
      this.setState({
        errors: err.toString(),
      });
    }
  };

  componentDidMount = async () => {
    try {
      const bookData = await axios.get(
        `${SERVER_URL}/books?email=${this.state.email}`
      );
      this.setState({
        books: bookData.data,
      });
    } catch (err) {
      this.setState({
        errors: err.toString(),
      });
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    let results = this.state.books.map((item) => (
      <Carousel.Item key={item._id}>
        <div className='book-info'>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <DeleteBooksButton bookId={item._id} deleteBook={this.handleDeleteBook} />
        </div>
      </Carousel.Item>
    ));

    return (
      <div className='carousel'>
        {isAuthenticated ? (
          <>
            <Carousel>{results}</Carousel>
            <BookFormModal
              handleAddBook={this.handleAddBook}
              displayFlip={this.displayFlip}
              display={this.state.display}
            />
            <div className='add-book-button'>
              <AddBookButton
                displayFlip={this.displayFlip}
                display={this.state.display}
              />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
