import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ name, img, path, text }) => {
  return (
    <Link to={path}>
      <div className="card-container card">
        <div className="flex-center card-img-container">
          <img src={img} alt={'Preview img of ' + name} />
        </div>
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Card;
