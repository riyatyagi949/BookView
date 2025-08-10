import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to subscribe.");
      navigate('/login');
      return;
    }

    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-overlay">
        <h2 className="newsletter-title">Stay in the Loop!</h2>
        <p className="newsletter-subtext">
          Subscribe to our newsletter for exclusive updates, new releases & curated recommendations.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="newsletter-input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {subscribed && <p className="success-msg">✅ Thanks for subscribing!</p>}
      </div>
    </section>
  );
};

export default Newsletter;
