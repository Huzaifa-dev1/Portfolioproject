import React, { useState } from "react";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MyPortfolio</Link> 
        </div>

        <ul className={isMobileMenuOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link> 
          </li>
          <li>
            <Link to="/About" onClick={toggleMenu}>About</Link> 
          </li>
          <li>
            <Link to="/Project" onClick={toggleMenu}>Projects</Link> 
          </li>
          <li>
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link> 
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
          <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
          <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
