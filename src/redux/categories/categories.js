// actions.js
const CHECK_STATUS = "categories/CHECK_STATUS";
const SET_CATEGORIES = "categories/SET_CATEGORIES";

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// reducer.js
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return "Under construction";
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};
