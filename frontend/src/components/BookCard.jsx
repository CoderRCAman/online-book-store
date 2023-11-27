import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          gap: ".4em",
        }}
        to={`/book/${book.id}`}
      >
        <img src={book.cover} />
        <p className="title">{book.title}</p>
        <p className="description">{book.description}</p>
      </Link>
      <div className="price-buy">
        <p className="price">Rs {book.price}</p>
        <Button variant="contained" color="success">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
