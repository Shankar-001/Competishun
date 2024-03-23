import { useNavigate, useParams } from 'react-router-dom';
import {
  JeeFullYearData,
  JeeShortTermData,
  NeetFullYearData,
  NeetShortTermData,
  JeeOfflineData,
  NeetOfflineData,
} from '../../Data/CourseData';
import CardComponent from '../CardComponent/CardComponent';
import { useEffect } from 'react';

const CourseCard = () => {
  const { path } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!courseData[path]) {
      navigate('/');
    }
  }, [navigate, path]);

  const courseData = {
    'jee-online-courses': {
      fullYear: {
        title: 'Full Year Online Courses (JEE MAIN+ADV) For',
        data: JeeFullYearData,
      },
      shortTerm: {
        title: 'Short Term Online Courses (JEE MAIN+ADV) For',
        data: JeeShortTermData,
      },
    },
    'jee-offline-courses': {
      fullYear: {
        title: 'Full Year Offline Courses (JEE MAIN+ADV) For',
        data: JeeOfflineData,
      },
    },
    'neet-online-courses': {
      fullYear: {
        title: 'Full Year Courses (NEET UG) For',
        data: NeetFullYearData,
      },
      shortTerm: {
        title: 'Short Term Online Courses (NEET UG) For',
        data: NeetShortTermData,
      },
    },
    'neet-offline-courses': {
      fullYear: {
        title: 'Full Year Offline Courses (NEET UG) For',
        data: NeetOfflineData,
      },
    },
  };

  const handleCardClick = (item) => {
    navigate('/');
    console.log(item);
  };

  const DataCourseCards = (type) => {
    const { title, data } = courseData[path][type];

    return (
      <>
        <div className="CourseDetails">
          {title} <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {data.map((item, index) => (
            <CardComponent
              key={index}
              data={item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="CourseCardMainContainer">
      {courseData[path] && (
        <div className="CourseCardSubContainer">
          {DataCourseCards('fullYear')}
          {courseData[path].shortTerm && DataCourseCards('shortTerm')}
        </div>
      )}
    </div>
  );
};

export default CourseCard;
