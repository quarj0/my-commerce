import React from "react";
import "./App.css";
import "./components/HomePage.css";
import AdvancedSearch from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
      <AdvancedSearch />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default App;
