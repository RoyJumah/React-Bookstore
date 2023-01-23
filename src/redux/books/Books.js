const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book !== action.book),
      };
    default:
      return state;
  }
};

export default bookReducer;
