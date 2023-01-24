import { createReducer } from '@reduxjs/toolkit';

// actions.js
const ADD_BOOK = 'React-Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'React-Bookstore/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

// reducer.js
const initialState = [];

const booksReducer = createReducer(initialState, {
  [ADD_BOOK]: (state, action) => {
    state.push(action.payload);
  },
  [REMOVE_BOOK]: (state, action) => {
    state.filter((book) => book.id !== action.payload);
  },
});

export {addBook, removeBook}

export default booksReducer;
