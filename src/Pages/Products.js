import React, { useContext, useState } from 'react';
import products from '../data/productdata';
import { CartContext } from '../Context/CartContext';
import '../Styles/Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const categories = [...new Set(products.map(p => p.category))];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const filteredProducts = products.filter(p => {
    const inCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlertMessage(`${product.title} added to cart!`);
    setTimeout(() => setAlertMessage(''), 2000);
  };

  return (
    <div className="products-page">
      <h2>Shop by Category</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</button>
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {alertMessage && <div className="cart-alert">{alertMessage}</div>}

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p className="price">${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          😔 Sorry, we don't have any products matching "<strong>{searchTerm}</strong>" right now.
        </div>
      )}
    </div>
  );
};

export default Products;
