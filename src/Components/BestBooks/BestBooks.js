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
      haveSearched: false,
      books: [],
      errors: '',
      email: this.props.auth0.user.email
    };
  }

  handleSearch = async(email) => {
    if(!email) {
      console.warn('No Username Provided!');
    } else {
      try {
        let response = await axios.get(`${SERVER_URL}/books?email=${email}`);
        console.log(response);
        this.setState({
          books: response.data,
          hasSearched: true
        });
      } catch(err) {
        this.setState({
          errors: err.toString()
        });
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    let results = [];
    this.state.books.forEach((item, index) => {
      results.push(
        <Carousel.Item key={index}>
          <div>
            <h3 className="title">{item.name}</h3>
            <p className="description">{item.description}</p>
          </div>
        </Carousel.Item>
      );
    });
    return(
      <div className="carousel" onLoad={ !this.state.hasSearched && this.handleSearch(this.state.email)}>
        {isAuthenticated ? <Carousel>{results}</Carousel> : ''}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
