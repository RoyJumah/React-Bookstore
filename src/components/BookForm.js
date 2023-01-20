import React, { Fragment } from 'react';
import './BookForm.css';

const BookForm = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <form>
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
