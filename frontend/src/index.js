import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from './Context/CartContext';
import './index.css';

window.onload = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
