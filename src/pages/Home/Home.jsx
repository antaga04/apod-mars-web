import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import { apodText, mrpText } from '../../utils/data';

const Home = () => {
  return (
    <main className="home-page">
      <section className="introduction">
        <h1>
          Welcome to <u>Astronomy Hub</u>!
        </h1>
        <h2>The perfect website to view pictures taken by NASA.</h2>
        <p>
          Right now we have avaliable both the Astronomy Picture of the Day (APOD) and the Mars
          Rovers Photo (MRP).
        </p>
        <p>
          You can select a specific date for the picture of try our new Magic button to get a random
          one.
        </p>
      </section>
      <section className="cards">
        <Card name="Astronomy Picture of the Day" img="/asteroid.png" text={apodText} path="apod" />
        <Card name="Mars Rovers Photo" img="/mars.png" text={mrpText} path="mrp" />
      </section>
    </main>
  );
};

export default Home;
