import React, { useState } from 'react';
import videoThumbnail from '../../assets/LandingPage/Prakhar.jpg';

import playIcon from '../../assets/important/play-button.svg';
import { FaPlayCircle } from 'react-icons/fa';

const LandingVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="landing-video-container">
      <div className="width-container">
        <div className="header">
          <h1>Watch Our Video</h1>
        </div>
        <div className="video-container">
          {showVideo ? (
            <iframe
              src="https://www.youtube.com/embed/-5gkilxbEUs"
              title="YouTube video player"
              frameBorder="0"
              autoPlay="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="thumbnail-container" onClick={handleClick}>
              <img
                src={videoThumbnail}
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <div className="play-button">
                <div className="video-main">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    {/* <div className="waves wave-3"></div> */}
                  </div>

                  {/* <img src={playIcon} className="fa-play" alt="Play Icon" /> */}
                  <div className="play-icon">
                    <FaPlayCircle className="fa-play" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="btn">Join Now</button>
      </div>
    </div>
  );
};

export default LandingVideo;
