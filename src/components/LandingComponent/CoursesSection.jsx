import React from 'react';
// import './CardComponent.css'; // Assuming the CSS file name is CardComponent.css
import img from '../../assets/Books/JeeMain/JeeMainChemistry.jpg';

const CoursesSection = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} alt="Image 1" />
        <div className="description">
          Description for Card 1. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </div>
        <a href="link1" className="read-more">
          Read More
        </a>
      </div>
      <div className="card">
        <img src={img} alt="Image 2" />
        <div className="description">
          Description for Card 2. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </div>
        <a href="link2" className="read-more">
          Read More
        </a>
      </div>
      <div className="card">
        <img src={img} alt="Image 3" />
        <div className="description">
          Description for Card 3. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </div>
        <a href="link3" className="read-more">
          Read More
        </a>
      </div>
      <div className="card">
        <img src={img} alt="Image 4" />
        <div className="description">
          Description for Card 4. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </div>
        <a href="link4" className="read-more">
          Read More
        </a>
      </div>
    </div>
  );
};

export default CoursesSection;
