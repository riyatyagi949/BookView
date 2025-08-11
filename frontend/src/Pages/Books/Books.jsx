import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooksByCategory } from "../../Services/api";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const collectionBooks = await fetchBooksByCategory("collection");
      setBooks(collectionBooks);
    };
    loadBooks();
  }, []);

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
                src={`${process.env.REACT_APP_API_URL}/uploads/${book.image}`}
                alt={book.bookname}
              />
              <div className="book-info">
                <h3>{book.bookname}</h3>
                <p>By {book.author}</p>
                <p>₹{book.price}</p>
                <p>{'★'.repeat(Math.floor(book.rating))}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Books;
