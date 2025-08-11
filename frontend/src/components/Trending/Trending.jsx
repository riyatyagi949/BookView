import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooksByCategory, BASE_URL } from '../../Services/api';
import './Trending.css';
import trendingBg from '../../Assets/Trending_background1.webp';

const TrendingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooksByCategory('trending');
      setBooks(books);
    };
    loadBooks();
  }, []);

  return (
    <section className="trending-section">
      <div
        className="trending-bg"
        style={{ backgroundImage: `url(${trendingBg})` }}
      />
      <div className="trending-overlay">
        <h2 className="trending-heading">Trending Books</h2>
        <div className="trending-books-container">
          {books.map((book) => (
            <Link
              to={`/books/${book._id}`}
              key={book._id}
              className="trending-book-card"
            >
              <img
                src={`${BASE_URL}/uploads/${book.image}`}
                alt={book.bookname}
                className="trending-book-image"
              />
              <div className="trending-book-info">
                <h3>{book.bookname}</h3>
                <p className="author">By {book.author}</p>
                <p className="price">₹{book.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
