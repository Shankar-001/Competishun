import React, { useState } from 'react';
import testimonialData from '../../Data/Testimonial.data';
import rArrow from '../../assets/right-angle.svg';
import playImg from '../../assets/ic-play.svg';
import Modal from '../../utils/Modal';

const TestimonialsSection = () => {

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
        <h1>Testimonials</h1>
        <div className="testimonials-container">
          <div className="arrow left-arrow" onClick={handleLeftSwipe}>
            <img src={rArrow} alt="left-arrow" />
          </div>
          <div className="TestimonialComp">
            {testimonialData.map((testimonial) => (
              <TestimonialComponent
                key={testimonial.id}
                name={testimonial.name}
                exam={testimonial.exam}
                videoUrl={testimonial.videoUrl}
                discription={testimonial.discription}
                title={testimonial.title}
                college={testimonial.college}
                email={testimonial.email}
                thumbnail={testimonial.thumbnail}
              />
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

export default TestimonialsSection;

const TestimonialComponent = ({
  name,
  exam,
  videoUrl,
  discription,
  title,
  college,
  email,
  thumbnail,
}) => {
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
              className="testimonial-img ls-is-cached lazyloaded"
              loading="lazy"
            />
            <img
              src={playImg}
              alt="Play"
              className="testimonial-play-btn right-10 ls-is-cached lazyloaded"
              loading="lazy"
            />
          </div>
          <p className="testimonial-desc">{discription}</p>
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
