import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Books.css';

const Books = (props) => {
  const { books, deleteBook } = props;
  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          -
          {book.author}
          <button
            className="remove__button"
            type="button"
            onClick={() => deleteBook(book.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Books;
