import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus, resetStatus } from '../redux/categories/categories';
import '../css/BookCategories.css';

const BookCategories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const handleCheckStatusClick = () => {
    dispatch(checkStatus());
  };

  useEffect(
    () => () => {
      dispatch(resetStatus());
    },
    [dispatch],
  );

  return (
    <div>
      <h1> Check the status of your book </h1>
      <button
        className="check-status__button"
        type="button"
        onClick={handleCheckStatusClick}
      >
        Check Status
      </button>
      <div className="status">{status}</div>
    </div>
  );
};

export default BookCategories;
