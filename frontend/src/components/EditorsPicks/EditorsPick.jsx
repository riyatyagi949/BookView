import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooksByCategory, BASE_URL } from "../../Services/api";
import "./EditorsPick.css";

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<span key={`full-${i}`} className="star">★</span>);
  }
  if (half) stars.push(<span key="half" className="star">☆</span>);
  while (stars.length < 5)
    stars.push(<span key={`empty-${stars.length}`} className="star empty">☆</span>);
  return stars;
};

const EditorsPick = () => {
  const [editorsPicks, setEditorsPicks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooksByCategory("editorsPick");
      setEditorsPicks(books);
    };
    loadBooks();
  }, []);

  return (
    <section className="editors-pick">
      <h2 className="section-title">Editor’s Pick</h2>
      <div className="editors-grid">
        {editorsPicks.map((book) => (
          <Link to={`/books/${book._id}`} key={book._id} className="editor-card">
            <img
              src={`${BASE_URL}/uploads/${book.image}`}
              alt={book.bookname}
            />
            <h4>{book.bookname}</h4>
            <p className="editor-author">By {book.author}</p>
            <p className="editor-reason">{book.description}</p>
            <p className="editor-price">Price: ₹{book.price}</p>
            <div className="book-rating">{renderStars(book.rating)}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
