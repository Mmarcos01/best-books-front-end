import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

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
      email: this.props.auth0.user.email
    };
  }

  componentDidMount = async() => {
    try {
      const bookData = await axios.get(`${SERVER_URL}/books?email=${this.state.email}`);
      this.setState({
        books: bookData.data
      });
    } catch(err) {
      this.setState({
        errors: err.toString()
      });
    }
  }
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    let results = [];
    this.state.books.forEach((item) => {
      results.push(
        <Carousel.Item key={item._id}>
          <div>
            <h3 className="title">{item.name}</h3>
            <p className="description">{item.description}</p>
          </div>
        </Carousel.Item>
      );
    });
    return(
      <div className="carousel">
        {isAuthenticated && this.state.books.length ? <Carousel>{results}</Carousel> : ''}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
