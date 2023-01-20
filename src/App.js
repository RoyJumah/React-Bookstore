import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import BookCategories from './components/BookCategories';
import Book from './components/Book';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route exact path="/bookcategories">
          <BookCategories />
        </Route>
        <Route exact path="/">
          <Book />
        </Route>
      </main>
    </>
  );
}

export default App;
