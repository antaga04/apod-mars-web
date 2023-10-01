import React from 'react';
import './Footer.css';
import { GithubIcon, GmailIcon, LinkedinIcon } from '../Icons/Icons';

const Footer = () => {
  return (
    <footer className="flex-center">
      <ul className="icons flex-center">
        <li>
          <a href="https://www.linkedin.com/in/adrian-anta-gil/" target="blank" rel="noopenner">
            {LinkedinIcon()}
          </a>
        </li>
        <li>
          <a href="http://github.com/antaga04/" target="blank" rel="noopenner">
            {GithubIcon()}
          </a>
        </li>
        <li>
          <a href="mailto:antaga04@gmail.com" target="blank" rel="noopenner">
            {GmailIcon()}
          </a>
        </li>
      </ul>
      <p>Designed & built by <a href="https://www.linkedin.com/in/adrian-anta-gil/" style={{color: 'var(--blue)'}}>Anta</a></p>
    </footer>
  );
};

export default Footer;
