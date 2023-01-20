import React, { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState({
    bookTitle: "",
  });

  const [enteredAuthor, setEnteredAuthor] = useState({
    bookAuthor: "",
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bookData = {
      bookTitle: enteredTitle,
      bookAuthor: enteredAuthor,
    };

    props.onSaveBookData(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
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

export default BookForm;
