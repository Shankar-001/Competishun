import React, { useEffect, useRef, useState } from 'react';

const HighlightSection = () => {
  return (
    <div className="highlight">
      <video autoPlay loop muted>
        <source src="src/assets/highlight-background.mp4" type="video/mp4" />
        {/* <source
          src="https://firebasestorage.googleapis.com/v0/b/couplematch-47708.appspot.com/o/videos%2Ftemp%2Fhighlight-background.mp4?alt=media&token=13772d22-7a7a-4ed9-8cb6-40b184f7e125"
          type="video/mp4"
        /> */}
        {/* Your browser does not support the video tag. */}
      </video>
      <div className="overlay">
        <div className="content">
          <h1>
            Math is <span>more fun</span>
          </h1>
          <h1>
            When done with <span>Competishun</span>
          </h1>
          <p>
            Learn how to attack JEE questions with India's one of the Best
            <br />
            Teachers #Competishun
          </p>
          <button className="btn">Explore our courses</button>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
