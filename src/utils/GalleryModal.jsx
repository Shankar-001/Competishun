import React from 'react';
import { FaCross, FaXmark } from 'react-icons/fa6';

const GalleryModal = ({ show, onClose, imagearray, currentImage }) => {
  if (!show) {
    return null; 
  }

  return (
    <div className="gallery-modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <FaXmark />
        </button>
        <div className="video-container">
          <img src={imagearray[currentImage].src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
