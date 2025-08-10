import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BookViewIcon from '../../Assets/BookView_Navbar_Icon.webp';
import CartIcon from '../CartIcon/CartIcon';
import { useCart } from '../../Context/CartContext';
import { fetchAllBooks } from '../../Services/api';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartCount = (cartItems || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const allBooks = await fetchAllBooks();
        setBooks(allBooks);
      } catch (error) {
        console.error("Failed to fetch books for search", error);
      }
    };
    loadBooks();
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim().toLowerCase();
    if (trimmed === '') return;

    const matchedBook = books.find(
      (book) =>
        book.bookname &&
        book.bookname.toLowerCase().includes(trimmed)
    );

    if (matchedBook) {
      navigate(`/books/${matchedBook._id}`);
    } else {
      alert("Book not found!");
      navigate(`/books?search=${encodeURIComponent(trimmed)}`);
    }

    setMenuOpen(false);
    setSearchTerm('');
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={BookViewIcon} alt="BookView Logo" className="book-icon" />
          <span className="book-part">Book</span>
          <span className="view-part">View</span>
        </Link>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }
          }}
        >
          <div className={menuOpen ? 'bar rotate1' : 'bar'} />
          <div className={menuOpen ? 'bar hide' : 'bar'} />
          <div className={menuOpen ? 'bar rotate2' : 'bar'} />
        </div>

        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <Link className={isActive('/') ? 'active' : ''} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link className={isActive('/books') ? 'active' : ''} to="/books" onClick={() => setMenuOpen(false)}>Books</Link>
          </li>
          <li>
            <Link className={isActive('/profile') ? 'active' : ''} to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          </li>
          <li>
            <Link className={isActive('/login') ? 'active' : ''} to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          </li>
          <li>
            <Link className={isActive('/register') ? 'active' : ''} to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </li>
          <li className="cart-mobile">
            <Link to="/cart" onClick={() => setMenuOpen(false)} aria-label="Go to Cart">
              <CartIcon itemCount={cartCount} />
            </Link>
          </li>
        </ul>

        {!menuOpen && (
          <div className="cart-desktop">
            <Link to="/cart" aria-label="Go to Cart">
              <CartIcon itemCount={cartCount} />
            </Link>
          </div>
        )}

        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search books"
            autoComplete="off"
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

