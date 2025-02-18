// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">

   
    <nav className='navbar'>
      <div className="portfolio">
        Portfolio
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} >
        <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/ai">
            AI
          </NavLink>
        </li>
       
        {/* ---- */}
        <li className="dropdown">
          <NavLink to="/smarttools" className="dropbtn" >Smart Tools</NavLink>
          <div className="dropdown-list">
            
          <ul className="dropdown-content nav-list" >
            <li><NavLink to="/smarttools/dateconverter">Date Converter</NavLink></li>
            <li><NavLink to="/smarttools/emicalculator">EMI Calculator</NavLink></li>
            <li><NavLink to="/smarttools/imagebackgroundremover">Image Resize</NavLink></li>
            <li><NavLink to="/smarttools/exchangerateconverter">Exchange Rate</NavLink></li>
          </ul>
          </div>
        </li>




        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

