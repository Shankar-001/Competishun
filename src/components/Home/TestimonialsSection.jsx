import React from 'react';
import testimonialData from '../../Data/Testimonial.data';

const TestimonialsSection = () => {
  return (
    <div className="TestimonialsSection">
      <div className="container">
        <h1>Testimonials</h1>
        <div className="testimonials">
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
  return (
    <div className="TestimonialComponent">
      <div className="contiainer">
        <div className="img">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{discription}</p>
          <a href={videoUrl} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};
