import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="home-page flex-center">
      <div className="introduction about">
        <h1>About</h1>
        <section>

        </section>
        <section>
          <h2>Atributions:</h2>
          <ul className="decoration">
            <li>
              <p>The awesome logo of this website is from </p>
              <a href="https://www.behance.net/kostyapetrenko1" className='social-link'>Kostya Petrenko</a>
            </li>
            <li>
              <p>Mobile menu burger by </p>
              <a href="https://codepen.io/pedrocampos" className='social-link'>Pedro Campos</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;
