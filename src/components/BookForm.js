import React, { useState } from 'react';
import '../css/BookForm.css';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [authorIsValid, setAuthorIsValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [authorTouched, setAuthorTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTitleTouched(true);
    setAuthorTouched(true);
    if (enteredTitle.trim() === '') {
      setTitleIsValid(false);
    } else {
      setTitleIsValid(true);
    }
    if (enteredAuthor.trim() === '') {
      setAuthorIsValid(false);
    } else {
      setAuthorIsValid(true);
    }
    if (titleIsValid && authorIsValid) {
      onAddBook({ title: enteredTitle, author: enteredAuthor });
      setEnteredAuthor('');
      setEnteredTitle('');
    }
    setSubmitting(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>ADD NEW BOOK</h2>
        <div className="new-expense__controls">
          <div
            className={
              titleIsValid || !titleTouched
                ? 'new-expense__control'
                : 'new-expense__control invalid'
            }
          >
            <input
              type="text"
              placeholder="Book Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
            {!titleIsValid && titleTouched && (
              <p className="error-text">Title must not be empty</p>
            )}
          </div>
          <div
            className={
              authorIsValid || !authorTouched
                ? 'new-expense__control'
                : 'new-expense__control invalid'
            }
          >
            <input
              type="text"
              placeholder="Author"
              value={enteredAuthor}
              onChange={authorChangeHandler}
            />
            {!authorIsValid && authorTouched && (
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
