import React, { useState } from 'react';
import { NavbarResultData } from '../../Data/NavbarResultData';
// import GalleryModal from '../../utils/GalleryModal';
import playImg from '../../assets/ic-play.svg';
import Modal from '../../utils/Modal';

const ResultComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (url) => {
    setvideoUrl(url);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const [videoUrl, setvideoUrl] = useState(null);
  return (
    <div className="gallery-container">
      <div className="gallery-section">
        <h2 className="gallery_heading">Tooper's Talk</h2>
        <div className="gallery">
          {NavbarResultData.map((data, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => handleShowModal(data.link)}
            >
              <div className="images" href={data.link} target="blank">
                <img
                  className="imagetag"
                  src={data.src}
                  alt={`Image ${index + 1}`}
                />
                <img src={playImg} alt="Play" className="result-play-btn" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && videoUrl && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};
export default ResultComponent;
