import { createReducer } from "@reduxjs/toolkit";

// actions.js
export const CHECK_STATUS = "categories/CHECK_STATUS";
export const SET_CATEGORIES = "categories/SET_CATEGORIES";

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
  [CHECK_STATUS]: (state) => {
    return "Under construction";
  },
  [SET_CATEGORIES]: (state, action) => {
    return action.payload;
  },
});
