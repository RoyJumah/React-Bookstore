import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/Books';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = (title, author) => {
    dispatch(addBook(title, author));
  };

  const removeExistingBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <Books books={books} deleteBook={removeExistingBook} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default Book;
