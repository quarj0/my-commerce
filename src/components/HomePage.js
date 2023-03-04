import React, { useState } from "react";
import "../styles/HomePage.css";
import products from '../data/products';
import Cart from './Cart';

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  return (
    <div className="home-page">
      <h1>Welcome to Our E-commerce Store!</h1>
      <p>Check out our Latest Products:</p>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default HomePage;
