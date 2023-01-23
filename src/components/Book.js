import React, { Component } from 'react';
import Books from '../redux/books/Books';
import BookForm from './BookForm';

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

  addBook = (book) => {
    this.setState((prevState) => ({
      books: [...prevState.books, book],
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
