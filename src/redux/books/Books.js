import { createReducer } from '@reduxjs/toolkit';

// actions.js
export const ADD_BOOK = 'bookStore/Book/ADD_BOOK ';
export const REMOVE_BOOK = 'bookStore/Book/REMOVE_BOOK';

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

export default booksReducer;
