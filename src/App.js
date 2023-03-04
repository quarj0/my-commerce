import React from "react";
import "./App.css";
import { useState } from "react";
import AdvancedSearch from "./components/Search";
// import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Header from "./components/Header";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    alert(
      `Checkout - Total: $${cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}`
    );
    setCartItems([]);
    setShowCart(false);
  };

  return (
    <div>
      <Header onShowCart={() => setShowCart(true)} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}
      <HomePage onAddToCart={handleAddToCart} />
      {/* <ShoppingCart />  */}
      <AdvancedSearch />
      <Footer />
    </div>
  );
};

export default App;
