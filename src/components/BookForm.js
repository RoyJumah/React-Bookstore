import React, { Fragment } from "react";
import "./BookForm.css";

const BookForm = () => (
  <>
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input type="text" placeholder="Book Title" />
        </div>
        <div className="new-expense__control">
          <input type="text" placeholder="Author" />
        </div>
        <div className="new-book__actions">
          <button type="submit">Add Book</button>
        </div>
      </div>
    </form>
  </>
);

export default BookForm;
