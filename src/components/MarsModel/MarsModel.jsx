import React from 'react';
import './MarsModel.css';

const MarsModel = ({ data, name }) => {
  if (data.photos.length === 0) {
    return (
      <div className="flex-center mars-container" style={{ flex: '1' }}>
        No data found for this date and rover.
      </div>
    );
  }

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
