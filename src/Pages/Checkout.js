import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "../Styles/Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => val.trim() === "")) {
      alert("Please fill all fields.");
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="checkout-success">
        <h2>Thank you for your purchase, {form.name}!</h2>
        <p>Your order has been successfully placed.</p>
        <button className="btn-back-shop" onClick={() => navigate("/Products")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <select name="payment" value={form.payment} onChange={handleChange}>
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button type="submit">Place Order</button>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <p key={item.id}>
            {item.title} × {item.quantity} = $
            {(item.price * item.quantity).toFixed(2)}
          </p>
        ))}
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Checkout;
