import React from 'react';

const ApodModel = ({ data, name }) => {
  const imgUrl = data && data.url;
  return (
    <>
      <picture>
        <img
          src={imgUrl === null ? data.hdurl : imgUrl}
          alt={`${name} picture.`}
          className="picture"
        />
      </picture>
      <h1>{data.title}</h1>
      <p>Picture from {data.date ? data.date : 'yyyy-mm-dd'} </p>
      <p>{data.explanation ? data.explanation : 'No explanation'}</p>
      <p>Credit & Copyright: {data.copyright ? data.copyright : 'Annonymous'}</p>
    </>
  );
};

export default ApodModel;
