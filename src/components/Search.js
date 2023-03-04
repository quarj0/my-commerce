import React, { useState } from "react";
import "../styles/Search.css";

const AdvancedSearch = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchParams = {};
    if (name) {
      searchParams.name = name;
    }
    if (category) {
      searchParams.category = category;
    }
    if (minPrice) {
      searchParams.minPrice = parseFloat(minPrice);
    }
    if (maxPrice) {
      searchParams.maxPrice = parseFloat(maxPrice);
    }
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
      </div>
      <div>
        <label htmlFor="minPrice">Minimum Price:</label>
        <input type="number" id="minPrice" value={minPrice} onChange={handleMinPriceChange} />
      </div>
      <div>
        <label htmlFor="maxPrice">Maximum Price:</label>
        <input type="number" id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default AdvancedSearch;
