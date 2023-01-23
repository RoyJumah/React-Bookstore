import React, { useState } from 'react';
import '../css/BookForm.css';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredTitleIsValid, setEnteredTitleIsValid] = useState(true);
  const [enteredAuthorIsValid, setEnteredAuthorIsValid] = useState(true);
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim() === '' || enteredAuthor.trim() === '') {
      setEnteredTitleIsValid(false);
      setEnteredAuthorIsValid(false);
      return;
    }

    setEnteredTitleIsValid(true);
    setEnteredAuthorIsValid(true);
    onAddBook({ title: enteredTitle, author: enteredAuthor });
    setEnteredAuthor('');
    setEnteredTitle('');
  };
  const nameInputClasses = enteredAuthorIsValid && enteredAuthorIsValid
    ? 'new-expense__control'
    : ' invalid';

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>ADD NEW BOOK</h2>
        <div className="new-expense__controls">
          <div className={nameInputClasses}>
            <input
              type="text"
              placeholder="Book Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
            {!enteredTitleIsValid && (
              <p className="error-text">Title must not be empty</p>
            )}
          </div>
          <div className={nameInputClasses}>
            <input
              type="text"
              placeholder="Author"
              value={enteredAuthor}
              onChange={authorChangeHandler}
            />
            {!enteredAuthorIsValid && (
              <p className="error-text">Author must not be empty .</p>
            )}
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
};
export default BookForm;
