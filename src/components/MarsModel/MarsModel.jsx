import React from 'react';
import './MarsModel.css';

const MarsModel = ({ data, name }) => {
  return (
    <div className="flex-center mars-container">
      {data.photos.map((item) => {
        return (
          <picture key={item.id}>
            <img src={item.img_src} alt={`${name} picture.`} className="picture" />
          </picture>
        );
      })}
    </div>
  );
};

export default MarsModel;
