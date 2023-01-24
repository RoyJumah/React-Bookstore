import { createReducer } from "@reduxjs/toolkit";

// actions.js
export const CHECK_STATUS = "React-Bookstore/categories/CHECK_STATUS";
export const SET_CATEGORIES = "React-Bookstore/categories/SET_CATEGORIES";

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// reducer.js
const initialState = [];

export default createReducer(initialState, {
  [CHECK_STATUS]: () => "Under construction",
  [SET_CATEGORIES]: (state, action) => {
    state.push(...action.payload);
  },
});
