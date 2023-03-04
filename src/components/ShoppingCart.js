import React, { useState } from "react";

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
    <div>
      <h2>Shopping Cart</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <br />
        <button type="submit">Add to Cart</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item && item.name} - ${item && item.price}{" "}
            <span>{item.name}</span>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
              <span>{item.price}</span>
            </li>
          ))}
      </ul>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default ShoppingCart;

