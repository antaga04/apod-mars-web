import React, { useState, useRef } from 'react';
import { formatDateToDayFirst } from '../../utils/functions';
import './ApodModel.css';

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

  if (data.code === 400) {
    return (
      <div className="flex-center mars-container" style={{ flex: '1' }}>
        No data found for this date.
      </div>
    );
  }

  return (
    <>
      <picture className="apod-picture">
        <img
          src={imgUrl === null ? data.hdurl : imgUrl}
          alt={`${name} picture.`}
          className="picture"
          onClick={handleOpenModal}
        />
      </picture>
      <h1 className="info-title">{data.title}</h1>
      <p className="info-date">
        Picture from - {data.date ? formatDateToDayFirst(data.date) : 'Unknown'}{' '}
      </p>
      <p className="info-explanation">{data.explanation ? data.explanation : 'No explanation'}</p>
      <p className="info-credit">
        Credit & Copyright - <strong>{data.copyright ? data.copyright : 'Anonymous'}</strong>
      </p>
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
