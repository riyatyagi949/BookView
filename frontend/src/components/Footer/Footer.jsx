import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleSectionNavigate = (sectionId) => {
    navigate('/'); 
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-logo">
            <span className="logo-book">Book</span>
            <span className="logo-view">View</span>
          </h3>
          <p>
            Your go-to place for the best books, curated collections, and great recommendations.
            Stay inspired and keep reading!
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => handleSectionNavigate('home')} className="footer-btn-link">Home</button></li>
            <li><button onClick={() => handleSectionNavigate('featured')} className="footer-btn-link">Featured Books</button></li>
            <li><button onClick={() => handleSectionNavigate('trending')} className="footer-btn-link">Trending</button></li>
            <li><button onClick={() => handleSectionNavigate('editorspick')} className="footer-btn-link">Editor's Pick</button></li>
            <li><button onClick={() => handleSectionNavigate('newsletter')} className="footer-btn-link">Newsletter</button></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@bookview.com</p>
          <p>Phone: +91 7657890980</p>
          <p>Address: 123 Book St, Reading City, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bookstore. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>↑ Back to Top</button>
      </div>
    </footer>
  );
};

export default Footer;

