import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

export const LandingWhyCompethisun = () => {
  return (
    <div className="main-container">
      <h2 className='benifits'>BENEFITS</h2>
      <h1 className='heading-whyCompetishun'>Why Competishun? </h1> 
      <div className="box1" id='abc'>
        <div className="check-logo">
          <LuCheckCircle color="#25D366" size={34} />
        </div>
        <div className="info">
          <p>Seasoned and experienced subject experts</p>
        </div>
      </div>

      <div className="box1" >
        <div className="check-logo">
          <LuCheckCircle color="#25D366" size={34} />
        </div>
        <div className="info">
          <p>20 years of experience in education sector .</p>
        </div>
      </div>

      <div className="box1">
        <div className="check-logo">
          <LuCheckCircle color="#25D366" size={34} />
        </div>
        <div className="info">
          <p>Enriched content which makes your path easier.</p>
        </div>
      </div>

      <div className="box1">
        <div className="check-logo">
          <LuCheckCircle color="#25D366" size={34} />
        </div>
        <div className="info">
          <p>Thousands of success stories</p>
        </div>
      </div>

      <div className="box1">
        <div className="check-logo">
          <LuCheckCircle color="#25D366" size={34} />
        </div>
        <div className="info">
          <p>Optimum usage of technology</p>
        </div>
      </div>
    </div>
  );
};
export default LandingWhyCompethisun;
