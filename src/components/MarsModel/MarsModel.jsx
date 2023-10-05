import React, { useRef, useState } from 'react';
import './MarsModel.css';

const MarsModel = ({ data, name }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dialogRef = useRef(null);

  const handleOpenModal = (img) => {
    setSelectedImage(img);
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

  if (data.photos.length === 0) {
    return (
      <div className="flex-center mars-container" style={{ flex: '1' }}>
        No data found for this date and rover.
      </div>
    );
  }

  return (
    <div className="flex-center mars-container">
      <dialog ref={dialogRef} className="modal" onClick={handleBackdropClick}>
        <picture>
          <img className="modal-image" src={selectedImage} alt={`${name} picture.`} />
        </picture>
        <button className="modal-close" onClick={handleCloseModal}>
          X
        </button>
      </dialog>
      {data.photos.map((item) => {
        return (
          <picture key={item.id}>
            <img
              src={
                item.img_src.startsWith('https://')
                  ? item.img_src
                  : `https://${item.img_src.replace(/^https?:\/\//, '')}`
              }
              alt={`${name} picture.`}
              className="picture"
              onClick={() => handleOpenModal(item.img_src)}
            />
          </picture>
        );
      })}
    </div>
  );
};

export default MarsModel;
