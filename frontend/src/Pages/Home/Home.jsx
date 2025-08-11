import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import EditorsPick from "../../components/EditorsPicks/EditorsPick";
import TrendingBooks from "../../components/Trending/Trending";
import Testimonials from "../../components/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";

import featuredBookBg from "../../Assets/Featured_Book.webp";
import curatedImg from "../../Assets/curated.webp";
import smartImg from "../../Assets/smart.jpg";
import deliveryImg from "../../Assets/fast.webp";

import { fetchBooksByCategory } from "../../Services/api";

// Use your live backend URL from environment variable or fallback
const BACKEND_BASE_URL =
  process.env.REACT_APP_API_URL?.replace(/\/$/, "") || "https://bookview-uv6z.onrender.com";

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    const getFeaturedBooks = async () => {
      try {
        const books = await fetchBooksByCategory("featured");
        setFeaturedBooks(books);
      } catch (error) {
        console.error("Failed to fetch featured books:", error);
      }
    };
    getFeaturedBooks();
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

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container" id="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay slide-in">
          <h1 className="headline">
            Discover Your Next <span className="highlight">Favorite Book</span>
          </h1>
          <p className="subtext">Thousands of books. Unlimited imagination.</p>
          <button className="cta-button bounce" onClick={scrollToFeatured}>
            Browse Collection
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {[curatedImg, smartImg, deliveryImg].map((img, idx) => (
          <div
            className={`feature-card fade-in delay-${idx} ${activeCard === idx ? "active" : ""}`}
            key={idx}
            onClick={() => setActiveCard(idx)}
          >
            <img src={img} alt="Feature" className="feature-img" />
            <h3>{["Curated Books", "Smart Recommendations", "Fast Delivery"][idx]}</h3>
            <p>
              {[
                "Handpicked collections to match your taste.",
                "AI-powered suggestions just for you.",
                "Get your books delivered swiftly and safely.",
              ][idx]}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Books Section */}
      <section
        className="featured-books"
        id="featured"
        style={{ backgroundImage: `url(${featuredBookBg})` }}
        ref={featuredRef}
      >
        <h2 className="section-title glow-text">Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.length === 0 ? (
            <p>Loading featured books...</p>
          ) : (
            featuredBooks.map((book) => (
              <Link to={`/books/${book._id}`} key={book._id} className="book-card fade-in">
                <img
                  src={`${BACKEND_BASE_URL}/uploads/${book.image}`}
                  alt={book.bookname}
                  className="book-image"
                />
                <h4>{book.bookname}</h4>
                <p>By {book.author}</p>
                <p>₹{book.price}</p>
                <p>{renderStars(book.rating)} ({book.rating})</p>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending">
        <TrendingBooks />
      </section>

      {/* Editor's Pick Section */}
      <section id="editorspick">
        <EditorsPick />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
