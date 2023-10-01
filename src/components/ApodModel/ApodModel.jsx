import React from 'react';
import Loading from '../Loading/Loading';

const ApodModel = ({ data, name }) => {
  return (
    <>
      <picture>
        <img src={data && data.hdurl} alt={`${name} picture.`} className="picture" />
      </picture>
      <h1>{data.title}</h1>
      <p>Picture from {data.date ? data.date : 'yyyy-mm-dd'} </p>
      <p>{data.explanation ? data.explanation : 'No explanation'}</p>
      <p>Credit & Copyright: {data.copyright ? data.copyright : 'Annonymous'}</p>
    </>
  );
};

export default ApodModel;
