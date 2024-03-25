import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="icon d-flex align-items-center">
          <img src={logo} className="logo" alt="Yummy Logo" />
          <h2 className="ms-2 mb-0">Yummy</h2>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/area">Area</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ingredients">Ingredients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
