import React, { Component } from 'react';
import Books from './Books';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'When The Sun Goes Down',
          author: 'Gwynne Forster',
        },
        {
          id: 2,
          title: 'To Kill A Mocking Bird',
          author: 'Harper Lee',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return <Books books={books} />;
  }
}

export default Book;
