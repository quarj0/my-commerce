import React from "react";
import "../styles/Cart.css";
import products from '../data/products';

const Cart = ({ cartItems = [], onRemoveFromCart, onCheckout }) => {
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }
    else {
      // Implement checkout logic here
      
      alert(`Checkout - Total: $${cartTotal.toFixed(2)}`);
    }
    onCheckout();
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => {
          const product = products.find(p => p.id === item.id);
          return (
            <div className="cart-item" key={item.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">
                  ${product.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>
      <div className="cart-total">
        <span>Total:</span>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;
