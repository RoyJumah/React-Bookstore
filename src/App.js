import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';

import MainHeader from './components/MainHeader';

const BookCategories = React.lazy(() => import('./redux/categories/BookCategories'));
const Book = React.lazy(() => import('./components/Book'));

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Suspense
          fallback={(
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}
        >
          <Route exact path="/bookcategories">
            <BookCategories />
          </Route>
          <Route exact path="/">
            <Book />
          </Route>
        </Suspense>
      </main>
    </>
  );
}

export default App;
