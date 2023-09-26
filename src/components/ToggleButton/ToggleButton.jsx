import React from 'react';
import './ToggleButton.css';
import { useTheme } from '../../utils/ThemeContext';
import { MoonIcon, SunIcon } from '../Icons/Icons.jsx';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button className={`${theme} theme-btn`} onClick={toggleTheme}>
        <div>
          <span className="switch"></span>
          {MoonIcon()}
          {SunIcon()}
        </div>
      </button>
    </>
  );
};

export default ToggleButton;
