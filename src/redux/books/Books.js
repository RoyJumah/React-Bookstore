import { v4 as uuidv4 } from "uuid";

// actions.js
const ADD_BOOK = "React-Bookstore/books/ADD_BOOK";
const REMOVE_BOOK = "React-Bookstore/books/REMOVE_BOOK";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

// reducer.js
const initialState = [
  {
    id: uuidv4(),
    title: "When The Sun Goes Down",
    author: "Gwynne Forster",
  },
  {
    id: uuidv4(),
    title: "To Kill A Mocking Bird",
    author: "Harper Lee",
  },
];

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          author: action.book.author,
          title: action.book.title,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
