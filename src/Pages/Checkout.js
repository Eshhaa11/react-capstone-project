import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/Checkout.css';


const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', email: '', address: '', payment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(val => val.trim() === '')) return alert('Please fill all fields.');
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return <h2>Thank you for your purchase, {form.name}!</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="payment" placeholder="Payment Method" onChange={handleChange} />
        <button type="submit">Place Order</button>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map(item => (
          <p key={item.id}>
            {item.title} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </p>
        ))}
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Checkout;
