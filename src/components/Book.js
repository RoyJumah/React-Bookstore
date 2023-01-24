import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Books from './Books';
import BookForm from './BookForm';

const Book = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'When The Sun Goes Down',
      author: 'Gwynne Forster',
    },
    {
      id: uuidv4(),
      title: 'To Kill A Mocking Bird',
      author: 'Harper Lee',
    },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: uuidv4() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <Books books={books} deleteBook={deleteBook} />
      <BookForm onAddBook={addBook} />
    </div>
  );
};

export default Book;
