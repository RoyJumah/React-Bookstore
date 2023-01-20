import React, { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
  const [enteredTitle, setEnteredTitle] = useState({
    bookTitle: '',
  });

  const [enteredAuthor, setEnteredAuthor] = useState({
    bookAuthor: '',
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle({ bookTitle: event.target.value });
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor({ bookAuthor: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
              value={enteredTitle.bookTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <input
              type="text"
              placeholder="Author"
              value={enteredAuthor.bookAuthor}
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

export default BookForm;
