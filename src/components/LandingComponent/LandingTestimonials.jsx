import React, { useState } from 'react';
import testimonialData from '../../Data/Testimonial.data';
import rArrow from '../../assets/right-angle.svg';
import playImg from '../../assets/ic-play.svg';
import Modal from '../../utils/Modal';

const LandingTestimonials = () => {
  const handleLeftSwipe = () => {
    const testimonialContainer = document.querySelector('.TestimonialComp');
    testimonialContainer.scrollLeft -= 300;
  };

  const handleRightSwipe = () => {
    const testimonialContainer = document.querySelector('.TestimonialComp');
    testimonialContainer.scrollLeft += 300;
  };
  return (
    <div className="TestimonialsSection">
      <div className="containerMain">
        <h1>HERE’S WHAT OUR STUDENTS HAVE TO SAY...</h1>
        <h3>
          Across the nation, we're the <span>Institute of choice</span> for
          thousands of students and parents
        </h3>
        <div className="testimonials-container">
          <div className="arrow left-arrow" onClick={handleLeftSwipe}>
            <img src={rArrow} alt="left-arrow" />
          </div>
          <div className="TestimonialComp">
            {testimonialData.map((testimonial) => (
              <TestimonialComponent key={testimonial.id} data={testimonial} />
            ))}
          </div>
          <div className="arrow right-arrow" onClick={handleRightSwipe}>
            <img src={rArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTestimonials;

const TestimonialComponent = ({ data }) => {
  const { name, exam, videoUrl, description, college, thumbnail } = data;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div
      className="card-item"
      data-slick-index="0"
      aria-hidden="false"
      tabIndex="0"
    >
      <div className="item-content">
        <div className="testimonial-item">
          <div
            className="testimonial-img-block"
            href={videoUrl}
            onClick={handleShowModal}
          >
            <img
              src={thumbnail}
              className="testimonial-img"
              loading="lazy"
            />
            <img
              src={playImg}
              alt="Play"
              className="testimonial-play-btn"
              loading="lazy"
            />
          </div>
          <p className="testimonial-desc">{description}</p>
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-as-a">
            {college} | {exam}
          </p>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} videoUrl={videoUrl} />
    </div>
  );
};
