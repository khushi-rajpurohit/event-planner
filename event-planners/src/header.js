import './App.css';


import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Create-Event</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Login</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;