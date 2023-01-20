import React from "react";

import Card from "./UI/Card";
import BookForm from "./BookForm";
const Book = (props) => {
  return (
    <>
      <Card className="expense-item">
        <BookForm title={props.title} />
        <BookForm author={props.author} />
      </Card>
    </>
  );
};

export default Book;
