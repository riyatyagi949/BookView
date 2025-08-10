import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';
import { useAuth } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { submitSiteReview, getAISuggestions } from '../../Services/api';


const Profile = () => {
  const { token } = useAuth();

  const [review, setReview] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [rating, setRating] = useState(5);

  const debounceTimer = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  };

  const handleStarClick = (value) => setRating(value);

  useEffect(() => {
    if (!review.trim()) {
      setPreview('');
      setSuggestions([]);
      setSelectedSuggestion('');
      return;
    }

    setPreview(review);

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => generateSuggestions(review), 800);

    return () => clearTimeout(debounceTimer.current);
  }, [review]);

  const generateSuggestions = async (input) => {
    try {
      const res = await getAISuggestions(input);
      setSuggestions(res.variants || []);
    } catch (err) {
      console.error('AI suggestion error:', err);
      toast.error(err?.response?.data?.message || 'Failed to get suggestions from AI');
    }
  };

  const handleUseSuggestion = (variant) => {
    setSelectedSuggestion(variant);
    setReview(variant);
    setPreview(variant);
  };

  const handleSubmitReview = async () => {
    const finalReview = review.trim();

    if (!token) {
      return toast.error('Please login to submit a review.');
    }
    if (!finalReview) {
      return toast.error('Review cannot be empty.');
    }

    setLoading(true);
    try {
      await submitSiteReview(finalReview, rating, token);
      toast.success('Review submitted successfully!');
      setReview('');
      setSuggestions([]);
      setSelectedSuggestion('');
      setPreview('');
    } catch (err) {
      console.error('Submit review error:', err);
      toast.error(err?.response?.data?.message || 'Failed to submit review.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`profile-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="profile-overlay">
        <div className="header-row">
          <h2>Your Profile</h2>
          <button className="toggle-mode" onClick={toggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <h3>Share your experience with the website</h3>
        <div className="review-section">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="5"
            placeholder="Write your experience here..."
            disabled={loading}
          />
        </div>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? 'star selected' : 'star'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
          <span className="rating-text">{rating}/5</span>
        </div>

        {suggestions.length > 0 && (
          <div className="review-options">
            <h4>💡 AI Suggestions:</h4>
            {suggestions.map((variant, index) => (
              <div
                key={index}
                className={`review-text refined ${
                  selectedSuggestion === variant ? 'active' : ''
                }`}
              >
                <div
                  onClick={() => handleUseSuggestion(variant)}
                  style={{ cursor: 'pointer' }}
                >
                  {variant}
                </div>
                <button
                  className="use-suggestion-btn"
                  onClick={() => handleUseSuggestion(variant)}
                >
                  Use this
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="live-preview">
          <h4>🔮 Live Preview</h4>
          <p>{preview || 'Your review preview will show here.'}</p>
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmitReview}
          disabled={loading || !token}
        >
          {loading ? 'Submitting...' : token ? 'Submit Review' : 'Login to submit'}
        </button>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Profile;

