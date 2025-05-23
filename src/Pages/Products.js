import React, { useContext, useState } from 'react';
import products from '../data/productdata';
import { CartContext } from '../Context/CartContext';
import '../Styles/Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const categories = [...new Set(products.map(p => p.category))];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); // for modal
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const filteredProducts = products.filter(p => {
    const inCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.title} added to cart!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
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

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          😔 Sorry, we don't have any products matching "<strong>{searchTerm}</strong>" right now.
        </div>
      )}

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="modal-details">
              <h2>{selectedProduct.title}</h2>
              <p className="price">${selectedProduct.price.toFixed(2)}</p>
              <p>{selectedProduct.description}</p>
              <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast message */}
      <div className={`toast-message ${showToast ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
};

export default Products;
