import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from './Components/Navbar';
import Wishlist from "./Pages/Wishlist";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<h2 style={{ padding: "2rem" }}>Page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
