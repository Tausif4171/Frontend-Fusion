import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';

export default function App() {
  return (
    <div>
      <Home />
      <ProductDetails />
      <CartDetails />
    </div>
  )
}