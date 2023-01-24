import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/Books';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
  },
});

export default store;
