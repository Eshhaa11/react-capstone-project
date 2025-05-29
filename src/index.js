import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/CartContext.js';
import { WishlistProvider } from './Context/WishlistContext.js'; // import WishlistProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <WishlistProvider>    
      <App />
    </WishlistProvider>
  </CartProvider>
);
