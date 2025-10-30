import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-circle"></div>
      <ul>
        <li>INICIO</li>
        <li>PROGRAMAS</li>
        <li>CONTACTO</li>
      </ul>
    </nav>
  );
}

export default Navbar;
