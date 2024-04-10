import React from 'react';
import { FaCross, FaXmark } from 'react-icons/fa6';

const DirectorModal = ({ show ,  onClose, data}) => {
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
        {/* <iframe
          title="Video Player"
          // src={videoUr}
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        {data.about}
      </div>
    </div>
  </div>
  );
};

export default DirectorModal;
