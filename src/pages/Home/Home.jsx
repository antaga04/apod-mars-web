import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <article className="home-page flex-center">
      <div className="introduction">
        <div>
          <p>Welcome! In this site you can view pictures taken by NASA.</p>
          <p>
            Right now we have avaliable both the Astronomical Picture of the Day (APOD) and the Mars
            Rovers Photo (MRP). You can select a specific date for the picture of try our new Magic
            button to get a random one.
          </p>
        </div>
        <section className="cards flex-center">
          <Card name="Astronomical Picture of the Day" img="/asteroid.png" path="apod" />
          <Card name="Mars Rovers Photo" img="/mars.png" path="mrp" />
        </section>
      </div>
    </article>
  );
};

export default Home;
