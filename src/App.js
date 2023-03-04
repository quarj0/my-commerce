import React from "react";
import "./App.css";
import AdvancedSearch from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <HomePage />
      <Header />
      <AdvancedSearch />
      <ShoppingCart />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
