import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext'; 
import '../Styles/Navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const { wishlist } = useContext(WishlistContext);
  const wishlistCount = wishlist.length;

  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">VibeFits</Link>
      
      {/* Hamburger button for mobile */}
      <button 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/products" className={pathname === '/products' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Products</Link>
        </li>
        <li>
          <Link to="/wishlist" className={pathname === '/wishlist' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Wishlist {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/cart" className={pathname === '/cart' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/checkout" className={pathname === '/checkout' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
