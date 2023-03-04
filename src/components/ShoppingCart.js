import React, { useState } from "react";
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      name: event.target.name.value,
      price: event.target.price.value,
    };
    setItems([...items, newItem]);
    event.target.reset();
  };

  const handleRemoveItem = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  const totalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="shopping-cart">
      <h2 className="title">Shopping Cart</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Name:
          <input type="text" name="name" className="input" />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" className="input" />
        </label>
        <br />
        <button type="submit" className="button">Add to Cart</button>
      </form>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            <span className="item-name">{item && item.name}</span>
            <span className="item-price">${item && item.price}</span>
            <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default ShoppingCart;
