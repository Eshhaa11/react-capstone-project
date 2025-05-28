import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">VibeFits</Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/products" className={pathname === '/products' ? 'active' : ''}>Products</Link>
        </li>
        <li>
          <Link to="/cart" className={pathname === '/cart' ? 'active' : ''}>
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/checkout" className={pathname === '/checkout' ? 'active' : ''}>Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
