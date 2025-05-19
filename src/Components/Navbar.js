import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">QuickCart 🛒</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#cart">Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a></li>
        <li><a href="#checkout">Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
