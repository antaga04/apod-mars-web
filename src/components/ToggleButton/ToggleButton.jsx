import React, { useState } from 'react';
import './ToggleButton.css';
import { useTheme } from '../../utils/ThemeContext';
import { MoonIcon, SunIcon } from '../Icons/Icons.jsx';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleThemeChange = () => {
    setButtonDisabled(true);
    toggleTheme();

    setTimeout(() => {
      setButtonDisabled(false);
    }, 560);
  };

  return (
    <>
      <button
        className={`${theme} theme-btn`}
        onClick={isButtonDisabled ? null : handleThemeChange}
        disabled={isButtonDisabled}
      >
        <div>
          <span className={`${theme} switch`}></span>
          {MoonIcon()}
          {SunIcon()}
        </div>
      </button>
    </>
  );
};

export default ToggleButton;
