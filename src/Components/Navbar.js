import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">QuickCart 🛒</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart">
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
