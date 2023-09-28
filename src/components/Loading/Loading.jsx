import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <section className='loading__wrapper'>
      <div className="scene">
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
