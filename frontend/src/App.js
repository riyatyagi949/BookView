import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext'; 


import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import BookDetails from './Pages/BookDetails/BookDetails';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Newsletter from './components/Newsletter/Newsletter';
import Profile from './Pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 


const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/profile/:bookId" element={<Profile />} />
      <Route path="*" element={<h2 style={{ padding: '20px' }}>404 - Page Not Found</h2>} />
    </Routes>
    <Footer />
  </Router>
);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

