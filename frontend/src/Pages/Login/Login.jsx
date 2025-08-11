import React, { useState } from 'react';
import './Login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const BACKEND_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:2000';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_BASE_URL}/api/v1/users/login`, form);

      const { token, ...user } = response.data;

      if (!token || Object.keys(user).length === 0) {
        throw new Error("Invalid login response");
      }

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      login(token, user);

      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}

        <input
          className="login-input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
