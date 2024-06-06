import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import rArrow from '../assets/right-angle.svg';

const PopupModal = ({ show, onClose, imagearray, currentImage }) => {
  const [imgIndex, setImgIndex] = useState(currentImage);

  const nextImageHandler = () => {
    setImgIndex((prevImgIndex) => (prevImgIndex + 1) % imagearray.length);
  };

  const prevImageHandler = () => {
    setImgIndex((prevImgIndex) => (prevImgIndex + imagearray.length - 1) % imagearray.length);
  };

  return (
    <div className={`gallery-modal-overlay ${show ? 'active' : ''}`}>
      {show && (
        <div className="modal">
          <button className="modal-close" onClick={onClose}>
            <FaXmark />
          </button>
          <div className="image-container">
            <div className="arrow left-arrow" onClick={prevImageHandler}>
              <img src={rArrow} alt="left-arrow" />
            </div>
            <div className="video-container">
              <img src={imagearray[imgIndex].src} alt="" />
            </div>
            <div className="arrow right-arrow" onClick={nextImageHandler}>
              <img src={rArrow} alt="right-arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
