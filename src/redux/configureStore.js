import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/reducer";
import booksReducer from "./books/reducer";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
  },
});

export default store;
