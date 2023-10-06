import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="home-page flex-center">
      <div className="introduction about">
        <h1>About</h1>
        <section>
          <p>
            Explore the cosmos through this website, where you can discover images gathered by NASA.
          </p>
          <p>
            If you've enjoyed the site's design and functionality, I invite you to explore more of
            my work in my{' '}
            <a href="https://adrian-anta.netlify.app/" target="blank" className="social-link">
              Portfolio
            </a>
            .
          </p>
          <p>
            Whether you're interested in collaborating, or simply want to connect, I'd love to hear
            from you! Feel free to reach out.
          </p>
        </section>
        <section>
          <h2>Atributions:</h2>
          <ul className="decoration">
            <li>
              <p>The awesome logo of this website is from </p>
              <a
                href="https://www.behance.net/kostyapetrenko1"
                target="blank"
                className="social-link"
              >
                Kostya Petrenko
              </a>
            </li>
            <li>
              <p>Loading animation [Hyperspace] by </p>
              <a href="https://codepen.io/noahblon" target="blank" className="social-link">
                Noah Blon
              </a>
            </li>
            <li>
              <p>Mobile menu burger by </p>
              <a href="https://codepen.io/pedrocampos" target="blank" className="social-link">
                Pedro Campos
              </a>
            </li>
            <li>
              <p>Black Hole animation </p>
              <a href="https://codepen.io/rafaelcastrocouto" target="blank" className="social-link">
                Rafael Castro Couto
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;
