import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

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
    resetStatus: (state) => produce(state, (draftState) => {
      draftState.status = '';
    }),
  },
});

export const { setCategories, checkStatus, resetStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
