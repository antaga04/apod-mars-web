import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '/black-hole.png';
import ToggleButton from '../ToggleButton/ToggleButton';
// import github, gmail, linkedIn, moon, sun from '/'

const Header = () => {
  return (
    <header>
      <div className="flex-center menu__wrapper">
        <NavLink to="" className="basis25">
          <img src={logo} className="logo" alt="Black hole img - Logo" />
        </NavLink>

        <nav className="menu-nav">
          <ul className="mobile-nav flex-center">menu ▾</ul>
          <ul className="flex-center menu-bar">
            <li>
              <NavLink to="">home</NavLink>
            </li>
            <li>
              <NavLink to="apod">apod</NavLink>
            </li>
            <li>
              <NavLink to="mrp">mrp</NavLink>
            </li>
          </ul>
          <div className="liquid-nav"></div>
        </nav>

        <div className="basis25 theme-toggle flex-center">
          <ToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
