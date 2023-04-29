import React from "react";
import books from "../books.json";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";

const BookDetails = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const book = books.find((book) => book.id === parseInt(bookId));

  return (
    <div className="book-details">
      <h2 style={{ textAlign: "center" }}>Book Details</h2>
      <Card className="Card">
        <CardContent>
          <Typography variant="h5" component="h2">
            Title: {book.title}
          </Typography>
          <Typography color="textSecondary">Author: {book.author}</Typography>
          <Typography color="textSecondary">
            Publication Date: {book.publication_date}
          </Typography>
          <Typography color="textSecondary">Genre: {book.genre}</Typography>
          <Typography variant="body2" component="p">
            Description: {book.details}
            {book.details}
            {book.details}
            {book.details}
          </Typography>
          <button
            style={{ backgroundColor: "#3e8e41" }}
            onClick={() => navigate(-1)}
          >
            BACK
          </button>{" "}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;
