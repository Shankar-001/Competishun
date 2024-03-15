import React from 'react';

const NewOffer = () => {
  function handleclick() {
    const container = document.querySelector('.NewOffer-main-container');
    if (container) {
      container.style.display = 'none';
    }
  }
  return (
    <div className="NewOffer-main-container">
      <div className="width">
        <div className="content">
          {' '}
          Get <span className="content-sub">99+ Percentile </span>in JEE Main
          with the Most Structured Courses {' '}
        </div>
        <a href="#" className="button">
          JOIN NOW
        </a>
      </div>
      <a href="#" className="cross" onClick={handleclick}>
        x
      </a>
    </div>
  );
};
export default NewOffer;
