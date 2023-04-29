import React, { useState } from "react";
import books from "../books.json";
import "./BookList.css";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";

function BookList() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const authorMatch = book.author
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch;
  });

  const itemList = filteredBooks.map((book) => {
    return (
      <li key={book.id}>
        <Card
          style={{
            backgroundColor: "#6ddfec",
          }}
          className="Card"
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Title: {book.title}
            </Typography>
            <Typography color="textSecondary">Author: {book.author}</Typography>
            <Typography color="textSecondary">
              Publication Date: {book.publication_date}
            </Typography>
            <Typography color="textSecondary">Genre: {book.genre}</Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ backgroundColor: "#3e8e41" }}
              className="Button"
              size="small"
            >
              <Link to={`/books/${book.id}`}>Details</Link>
            </Button>
          </CardActions>
        </Card>
      </li>
    );
  });
  return (
    <div className="book-list">
      <h2 style={{ textAlign: "center" }}>List of Books</h2>
      <TextField
        label="Search by Book Name or Author"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        style={{
          marginBottom: "1rem",
          display: "flex",
        }}
      />
      <ul>{itemList}</ul>
    </div>
  );
}

export default BookList;
