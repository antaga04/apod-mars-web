import React, { useState, useRef } from 'react';

const ApodModel = ({ data, name }) => {
  const imgUrl = data && data.url;
  const dialogRef = useRef(null);

  const handleOpenModal = () => {
    dialogRef.current.showModal();
  };

  const handleCloseModal = () => {
    dialogRef.current.close();
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleCloseModal();
    }
  };

  return (
    <>
      <picture>
        <img
          src={imgUrl === null ? data.hdurl : imgUrl}
          alt={`${name} picture.`}
          className="picture"
          onClick={handleOpenModal}
        />
      </picture>
      <h1>{data.title}</h1>
      <p>Picture from {data.date ? data.date : 'yyyy-mm-dd'} </p>
      <p>{data.explanation ? data.explanation : 'No explanation'}</p>
      <p>Credit & Copyright: {data.copyright ? data.copyright : 'Anonymous'}</p>
      <dialog ref={dialogRef} className="modal" onClick={handleBackdropClick}>
        <picture>
          <img
            src={imgUrl === null ? data.hdurl : imgUrl}
            alt={`${name} picture.`}
            className="modal-image"
          />
        </picture>
        <button className="modal-close" onClick={handleCloseModal}>
          X
        </button>
      </dialog>
    </>
  );
};

export default ApodModel;
