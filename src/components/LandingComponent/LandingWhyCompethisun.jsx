import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';
import student from '../../assets/student.png';

export const LandingWhyCompethisun = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="content">
          <h1 className="heading-whyCompetishun">
            Why <span>Join</span> Competishun?{' '}
          </h1>

          <div className="box1" id="abc">
            <div className="check-logo">
              <LuCheckCircle color="#25D366" className='check' />
            </div>
            <div className="info">
              <p>Seasoned and experienced subject experts</p>
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <LuCheckCircle color="#25D366"  className='check'/>
            </div>
            <div className="info">
              <p>20 years of experience in education sector.</p>
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <LuCheckCircle color="#25D366"  className='check'/>
            </div>
            <div className="info">
              <p>Enriched content which makes your path easier.</p>
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <LuCheckCircle color="#25D366" className='check' />
            </div>
            <div className="info">
              <p>Thousands of success stories</p>
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <LuCheckCircle color="#25D366" className='check' />
            </div>
            <div className="info">
              <p>Optimum usage of technology</p>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={student} alt="student" className="student-image" />
        </div>
      </div>
      <button className="btn">
        Join Now
      </button>
    </div>
  );
};
export default LandingWhyCompethisun;
