import React, { useState } from 'react';
import '../css/BookForm.css';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredTitleIsValid, setEnteredTitleIsValid] = useState(false);
  const [enteredAuthorIsValid, setEnteredAuthorIsValid] = useState(false);
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const [enteredAuthorTouched, setEnteredAuthorTouched] = useState(false);
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredTitleTouched(true);
    setEnteredAuthorTouched(true);
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

  const nameInputIsInvalid = !enteredAuthorIsValid && enteredAuthorTouched;
  const authorInputIsInvalid = !enteredTitleIsValid && enteredTitleTouched;

  const nameInputClasses = nameInputIsInvalid || authorInputIsInvalid
    ? 'new-expense__control invalid'
    : 'new-expense__control';

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
            {nameInputIsInvalid && (
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
            {authorInputIsInvalid && (
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
