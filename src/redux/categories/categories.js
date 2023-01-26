import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], status: '' };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => ({
      ...state,
      categories: [...state.categories, ...action.payload],
    }),
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
    resetStatus: (state) => ({
      ...state,
      status: '',
    }),
  },
});

export const { setCategories, checkStatus, resetStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
