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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="thumbnail-container">
              <img
                src={videoThumbnail}
                alt="Video Thumbnail"
                className="thumbnail"
              />
              <div onClick={handleClick} className="play-button">
                <div class="video-main">
                  <div class="waves-block">
                    <div class="waves wave-1"></div>
                    <div class="waves wave-2"></div>
                    {/* <div class="waves wave-3"></div> */}
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
        <button className="btn" >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default LandingVideo;
