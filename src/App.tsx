import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </div>
    </Router>
  );
}