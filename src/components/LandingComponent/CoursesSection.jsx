import React from 'react';
// import { FaUserDoctor } from "react-icons/fa6";
import img from '../../assets/LandingPage/doctor.png';
import jeeimg from '../../assets/LandingPage/jee.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const navigate = useNavigate();
  const Allcoursedata = [
    {
      icon: jeeimg,
      cardhead: 'JEE Online',
      class1: 'class11',
      class2: 'class12',
      class3: 'Dropper',
      button: 'Explore our courses',
      title: 'jee-online-courses',
    },
    {
      icon: jeeimg,
      cardhead: 'JEE Offline',
      class1: 'class11',
      class2: 'class12',
      class3: 'Dropper',
      button: 'Explore our courses',
      title: 'jee-offline-courses',
    },
    {
      icon: img,
      cardhead: 'NEET ( UG ) Online',
      class1: 'class11',  
      class2: 'class12',
      class3: 'Dropper',
      button: 'Explore our courses',
      title: 'neet-online-courses',
    },
    {
      icon: img,
      cardhead: 'NEET ( UG ) Offline',
      class1: 'class11',
      class2: 'class12',
      class3: 'Dropper',
      button: 'Explore our courses',
      title: 'neet-offline-courses',
    },
  ];
  const handleCardClick = (data) => {
    navigate(`/courses/${data.title}`);
  };
  return (
    <div className="card-main-container">
      <div className='card-main-heading'>
        <p className="main-heading">All Courses</p>
        <p className="main-heading-desc">
          Embark on your journey to success by selecting your desired exam
          category from the comprehensive list of options provided by
          Competishun.
        </p>
      </div>

      <div className="card-container">
        {Allcoursedata.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <img src={data.icon} alt="img" />
            </div>
            <div className="card-heading"> {data.cardhead}</div>
            <div className="card-class">
              <div className="description">{data.class1}</div>
              <div className="description">{data.class2}</div>
              <div className="description">{data.class3}</div>
            </div>
            <div className="explore-button" onClick={() => handleCardClick(data)}>
              <div className="read-more" >
                <p>explore our courses</p>
                <p className="arrow-icon">
                  <FaLongArrowAltRight size={20} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
