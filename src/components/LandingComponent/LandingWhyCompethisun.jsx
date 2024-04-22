import React from 'react';
import { GiFlowerStar } from 'react-icons/gi';
import gif from '../../assets/click2.gif';
import { GiClick } from 'react-icons/gi';
import { FaCheckCircle } from 'react-icons/fa';
export const LandingWhyCompethisun = ({ CourseData }) => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="content">
          <h1 className="heading-whyCompetishun">ABOUT THE COURSE</h1>
          {CourseData.aboutCourse.map((detail, index) => {
            const [amountDetail, urlPart] = detail.split(' (#');
            const url = urlPart ? urlPart.slice(0, -1) : null;

            return (
              <div className="box1" key={index}>
                <div className="check-logo">
                  <FaCheckCircle color="#25D366" className="check" />
                </div>
                <div className="info">
                  <p>
                    {amountDetail}{' '}
                    {url && (
                      <a href={url} target="_blank">
                        <span>Watch-Now</span>
                      </a>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="image">
          {CourseData.aboutCourse &&
            CourseData.aboutCourse[0].split(' (#').length > 1 && (
              <img src={gif} alt="student" className="student-image" />
            )}

          {/* <video src={video} alt="student" className="student-image" autoPlay poster={pic}/> */}
        </div>
      </div>
      <a className="btn" href="#contact_us">
        Join Now
      </a>
    </div>
  );
};
export default LandingWhyCompethisun;
