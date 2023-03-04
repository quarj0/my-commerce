import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#shop" className="nav-link">Shop</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#cart" className="nav-link">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
