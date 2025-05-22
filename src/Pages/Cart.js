import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="item-image" />

            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <label htmlFor={`qty-${item.id}`} className="qty-label">Qty:</label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                />
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.title} from cart`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h2 className="total-label">Total:</h2>
        <span className="total-amount">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
