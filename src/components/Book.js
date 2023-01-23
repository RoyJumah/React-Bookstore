import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Books from './Books';
import BookForm from './BookForm';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: uuidv4(),
          title: 'When The Sun Goes Down',
          author: 'Gwynne Forster',
        },
        {
          id: uuidv4(),
          title: 'To Kill A Mocking Bird',
          author: 'Harper Lee',
        },
      ],
    };
  }

  addBook = (book) => {
    this.setState((prevState) => ({
      ...prevState,
      books: [...prevState.books, { ...book, id: uuidv4() }],
    }));
  };

  deleteBook = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book) => book.id !== id),
    }));
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <Books books={books} deleteBook={this.deleteBook} />
        <BookForm onAddBook={this.addBook} />
      </div>
    );
  }
}

export default Book;
