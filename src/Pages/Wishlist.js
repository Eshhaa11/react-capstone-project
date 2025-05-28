import React, { useContext } from 'react';
import { WishlistContext } from '../Context/WishlistContext';
import products from '../data/productdata';
import '../Styles/Wishlist.css';  // optional, style as you want

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  // Get full product details for wishlist items
  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(id => id !== productId));
  };

  return (
    <div className="wishlist-page" style={{ padding: '2rem' }}>
      <h1>Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistProducts.map(product => (
            <div key={product.id} className="wishlist-card">
              <img src={product.image} alt={product.title} width={150} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
