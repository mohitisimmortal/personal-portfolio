// Header.jsx
import React from 'react';
import './Header.css';

function Header() {

  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <a href="#" className={`logo josefin-font`}>
              Mohit P.
            </a>
          </li>
          <li>
            <a href="#contact" className="josefin-font button" id="contact-button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;