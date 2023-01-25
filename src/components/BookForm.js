import React, { useState } from 'react';
import '../css/BookForm.css';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook, setTitle, setAuthor }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim() !== '' && enteredAuthor.trim() !== '') {
      onAddBook();
      setTitle(enteredTitle);
      setAuthor(enteredAuthor);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>ADD NEW BOOK</h2>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <input
              type="text"
              placeholder="Book Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <input
              type="text"
              placeholder="Author"
              value={enteredAuthor}
              onChange={authorChangeHandler}
            />
          </div>
          <div className="new-book__actions">
            <button type="submit">Add Book</button>
          </div>
        </div>
      </form>
    </>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
};

export default BookForm;
