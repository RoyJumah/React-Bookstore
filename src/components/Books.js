import React from 'react';
import PropTypes from 'prop-types';
import './Books.css';

const Books = ({ books }) => (
  <ul className="bookList">
    {books.map((book) => (
      <li key={book.id}>
        {book.title}
        {' '}
        -
        {book.author}
        <button className="remove__button" type="button">
          Remove
        </button>
      </li>
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Books;
