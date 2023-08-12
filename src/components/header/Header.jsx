// Header.jsx
import React from 'react';
import './Header.css';
import { useRecoilValue } from 'recoil';
import { logoColorState } from '../../atom';

function Header() {
  const logoColor = useRecoilValue(logoColorState);
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <a href="#" className={`logo josefin-font ${logoColor}`}>
              Last dev.
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