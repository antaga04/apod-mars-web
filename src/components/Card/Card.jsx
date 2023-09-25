import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ name, img, path }) => {
  return (
    <Link to={path}>
      <div className="card-container">
        <div className="flex-center card-img-container">
          <img src={img} alt={'Preview img of ' + name} />
        </div>
        <h2>{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione illum aspernatur,
          reiciendis nobis perferendis.
        </p>
      </div>
    </Link>
  );
};

export default Card;
