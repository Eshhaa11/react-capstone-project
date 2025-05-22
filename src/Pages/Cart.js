import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-price">${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="item-quantity"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
