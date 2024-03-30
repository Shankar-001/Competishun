import React, { useEffect, useRef, useState } from 'react';

const HighlightSection = () => {
  return (
    <div className="highlight">
      <video autoPlay loop muted>
        <source src="src/assets/highlight-background.mp4" type="video/mp4" />
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
