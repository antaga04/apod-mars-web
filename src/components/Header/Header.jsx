import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '/black-hole.png';
import ToggleButton from '../ToggleButton/ToggleButton';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header>
      <div className="flex-center menu__wrapper">
        <NavLink to="" className="basis25" onClick={closeMenu}>
          <img src={logo} className="logo" alt="Black hole img - Logo" />
        </NavLink>

        <nav className="menu-nav">
          <ul className={`flex-center menu-bar ${isMenuVisible ? 'active' : ''}`}>
            <li>
              <NavLink to="" onClick={closeMenu}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="apod" onClick={closeMenu}>
                apod
              </NavLink>
            </li>
            <li>
              <NavLink to="mrp" onClick={closeMenu}>
                mrp
              </NavLink>
            </li>
          </ul>

          <div className="basis25 theme-toggle flex-center">
            <ToggleButton />
          </div>

          <div className={`bars-container ${isMenuVisible ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
