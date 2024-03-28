import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="Yummy Logo" />
          <span className="ms-2">Yummy</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
