import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Toast from '../../components/Toast/Toast'; // ✅

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // ✅

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("Please fill in all fields.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);
      const { data } = await axios.post('http://localhost:2000/api/v1/users/register', {
        name: form.name,
        email: form.email,
        password: form.password
      });

      localStorage.setItem('user', JSON.stringify(data)); // ✅ not "userInfo"
      login(data); // ✅ login context
      setShowToast(true); // ✅ toast
      setTimeout(() => navigate('/'), 3000); // redirect
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {showToast && <Toast message="✅ Registration successful!" onClose={() => setShowToast(false)} />}
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        {error && <p className="error-message">{error}</p>}

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
