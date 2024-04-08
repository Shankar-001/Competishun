import React from 'react';
import { FaCross, FaXmark } from 'react-icons/fa6';

const Modal = ({ show, onClose, videoUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <FaXmark />
        </button>
        <div className="video-container">
          <iframe
            title="Video Player"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
