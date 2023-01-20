import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import BookCategories from './components/BookCategories';
import Book from './components/Book';

function App() {
  return (
    <>
      <Route exact path="/bookcategories">
        <BookCategories />
      </Route>
      <Route exact path="/">
        <Book />
      </Route>
    </>
  );
}

export default App;
