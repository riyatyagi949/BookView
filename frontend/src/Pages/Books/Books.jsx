import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooksByCategory, BASE_URL } from "../../Services/api"; 
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const collectionBooks = await fetchBooksByCategory("collection");
        setBooks(collectionBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    loadBooks();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < full; i++) stars.push(<span key={i}>★</span>);
    if (half) stars.push(<span key="half">☆</span>);
    while (stars.length < 5) stars.push(<span key={`e-${stars.length}`}>☆</span>);
    return stars;
  };

  return (
    <div className="books-container">
      <h1 className="books-title">Book Collection</h1>
      <div className="books-grid">
        {books.length === 0 ? (
          <p>No books found in the collection.</p>
        ) : (
          books.map((book) => (
            <Link to={`/books/${book._id}`} key={book._id} className="book-card">
              <img
                src={`${BASE_URL}/uploads/${book.image}`}
                alt={book.bookname}
              />
              <div className="book-info">
                <h3>{book.bookname}</h3>
                <p>By {book.author}</p>
                <p>₹{book.price}</p>
                <div className="book-rating">{renderStars(book.rating)}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Books;
