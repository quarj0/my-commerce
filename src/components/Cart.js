import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={onCheckout} className="checkout-btn">
          Checkout
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3 className="product-title">{item.name}</h3>
              <p className="product-price">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => onRemoveFromCart(item)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total:</span>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;
