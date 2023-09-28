import React from 'react';
import Loading from '../Loading/Loading';

const ApodModel = ({ data, name, load }) => {
  return (
    <>
      {load === true ? (
        <Loading />
      ) : (
        <figure className="card-container">
          <picture>
            <img src={data && data.hdurl} alt={`${name} picture.`} className="picture" />
          </picture>
          <h1>{data.title || 'Default'}</h1>
          <p>Picture from {data.date ? data.date : 'yyyy-mm-dd'} </p>
          <p>{data.explanation ? data.explanation : 'No explanation'}</p>
          <p>Copyright: {data.copyright ? data.copyright : 'Annonymous'}</p>
        </figure>
      )}
    </>
  );
};

export default ApodModel;
