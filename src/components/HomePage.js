import React from "react";
import "../styles/HomePage.css";


const HomePage = ({ products, onAddToCart }) => {
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
    </div>
  );
};

export default HomePage;
