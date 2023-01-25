import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/Books';

const Book = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook(enteredTitle, enteredAuthor));
    setEnteredTitle('');
    setEnteredAuthor('');
  };

  const removeExistingBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <Books books={books} deleteBook={removeExistingBook} />
      <BookForm
        onAddBook={handleAddBook}
        setTitle={setEnteredTitle}
        setAuthor={setEnteredAuthor}
      />
    </div>
  );
};

export default Book;
