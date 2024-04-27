import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';
import Product from './interfaces/Product'
import BottomMenu from './components/BottomMenu';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log({ products })

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched products:', data);
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  return (
    <Router>
      <div className='manrope-font'>
        {/* <BottomMenu /> */}
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/product-details/:id" element={<ProductDetails products={products} />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </div>
    </Router>
  );
}