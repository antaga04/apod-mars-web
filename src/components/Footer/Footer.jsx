import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="flex-center">
      <ul className="icons flex-center">
        <li>
          <a href="https://www.linkedin.com/in/adrian-anta-gil/" target="blank" rel="noopenner">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <g className="layer">
                <title>LinkedIn</title>
                <circle cx="4.98" cy="5.01" id="svg_1" r="2.19" />
                <path
                  d="m9.24,8.85l0,12.14l3.77,0l0,-6c0,-1.58 0.29,-3.12 2.26,-3.12c1.94,0 1.96,1.81 1.96,3.22l0,5.9l3.77,0l0,-6.65c0,-3.27 -0.7,-5.79 -4.53,-5.79c-1.83,0 -3.06,1.01 -3.56,1.96l-0.06,0l0,-1.66l-3.61,0zm-6.14,0l3.77,0l0,12.14l-3.77,0l0,-12.14z"
                  id="linkedin-icon"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="http://github.com/antaga04/" target="blank" rel="noopenner">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <g className="layer">
                <title>GitHub</title>
                <path
                  clipRule="evenodd"
                  d="m12.03,2c-5.51,0 -9.98,4.47 -9.98,9.97c0,4.41 2.86,8.15 6.82,9.47c0.5,0.09 0.68,-0.22 0.68,-0.48c0,-0.24 -0.01,-0.87 -0.01,-1.7c-2.77,0.6 -3.36,-1.34 -3.36,-1.34c-0.45,-1.15 -1.11,-1.46 -1.11,-1.46c-0.9,-0.61 0.07,-0.6 0.07,-0.6c1,0.07 1.53,1.03 1.53,1.03c0.89,1.52 2.34,1.08 2.9,0.83c0.09,-0.65 0.35,-1.09 0.64,-1.34c-2.22,-0.25 -4.55,-1.1 -4.55,-4.93c0,-1.08 0.39,-1.98 1.03,-2.67c-0.1,-0.26 -0.45,-1.27 0.1,-2.64c0,0 0.83,-0.27 2.74,1.02a9.58,9.58 0 0 1 2.5,-0.34a9.55,9.55 0 0 1 2.49,0.34c1.91,-1.29 2.74,-1.02 2.74,-1.02c0.55,1.37 0.21,2.38 0.1,2.64c0.64,0.69 1.03,1.58 1.03,2.67c0,3.84 -2.33,4.68 -4.56,4.92c0.36,0.31 0.68,0.92 0.68,1.85c0,1.33 -0.01,2.41 -0.01,2.74c0,0.26 0.18,0.57 0.68,0.48c3.97,-1.33 6.82,-5.06 6.82,-9.47c0,-5.5 -4.47,-9.97 -9.97,-9.97z"
                  fillRule="evenodd"
                  id="github-icon"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:antaga04@gmail.com" target="blank" rel="noopenner">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <g className="layer">
                <title>Gmail</title>
                <path
                  d="m18.73,5.41l-1.28,1l-5.45,4.05l-5.45,-4.09l-1.28,-1a2,2 0 0 0 -3.27,1.68l0,11.59a1.36,1.36 0 0 0 1.36,1.36l3.19,0l0,-7.72l5.45,4.09l5.45,-4.09l0,7.72l3.19,0a1.36,1.36 0 0 0 1.36,-1.36l0,-11.59a2,2 0 0 0 -3.27,-1.64z"
                  id="gamil-icon"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
      <p>be consistent, get better</p>
    </footer>
  );
};

export default Footer;
