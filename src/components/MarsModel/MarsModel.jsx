import React from 'react';
import Loading from '../Loading/Loading';

const MarsModel = ({ data, name, load }) => {
  return (
    <>
      {load === true ? (
        <Loading />
      ) : (
        <figure className="card-container">
          <picture>
            <img
              src={data.photos ? data.photos[0].img_src : null}
              alt={`${name} picture.`}
              className="picture"
            />
          </picture>
        </figure>
      )}
    </>
  );
};

export default MarsModel;
