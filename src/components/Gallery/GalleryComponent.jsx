import React, { useState } from 'react';
import {
  GalleryDataAchiev,
  GalleryDataCelebration,
} from '../../Data/GalleryData';
import GalleryModal from '../../utils/GalleryModal';

const GalleryComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (arr, index) => {
    setCurrentImage(index);
    setShowModal(true);
    setcurrentarray(arr);
  };
  const handleCloseModal = () => setShowModal(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentarray, setcurrentarray] = useState(null);
  return (
    <div className="gallery-container">
      <div className="gallery-section">
        <h2 className="gallery_heading">Achievements</h2>
        <div className="gallery">
          {GalleryDataAchiev.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => {
                handleShowModal(GalleryDataAchiev, index);
              }}
            >
              <div href={image.link} target="blank">
                <img src={image.src} alt={`Image ${index + 1}`} />
              </div>

              <div className="desc">{image.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-section">
        <h2 className="gallery_heading">Celebration</h2>
        <div className="gallery">
          {GalleryDataCelebration.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => {
                handleShowModal(GalleryDataCelebration, index);
              }}
            >
              <div href={image.link} target="blank">
                <img src={image.src} alt={`Image ${index + 1}`} />
              </div>
              <div className="desc">{image.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {showModal && currentImage >= 0 && currentarray && (
        <GalleryModal
          show={showModal}
          onClose={handleCloseModal}
          imagearray={currentarray}
          currentImage={currentImage}
        />
      )}
    </div>
  );
};
export default GalleryComponent;
