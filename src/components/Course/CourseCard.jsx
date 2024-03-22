import { useParams } from 'react-router-dom';

import {
  JeeFullYearData,
  NeetFullYearData,
  NeetShortTermData,
  JeeShortTermData,
} from '../../Data/CourseData';
import CardComponent from '../CardComponent/CardComponent';

const CourseCard = () => {
  const { path } = useParams();

  return (
    <div className="CourseCardMainContainer">
      {path === 'jee-online-courses' && (
        <div className="CourseCardSubContainer">
          <div className="CourseDetails">
            Full Year Online Courses (JEE MAIN+ADV) For <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {JeeFullYearData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
          <div className="CourseDetails">
            Short Term Online Courses (JEE MAIN+ADV) For{' '}
            <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {JeeShortTermData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
        </div>
      )}

      {path === 'jee-offline-courses' && (
        <div className="CourseCardSubContainer">
          <div className="CourseDetails">
            Full Year Offline Courses (JEE MAIN+ADV) For{' '}
            <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {JeeFullYearData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
          <div className="CourseDetails">
            Short Term Offline Courses (JEE MAIN+ADV) For{' '}
            <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {JeeShortTermData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
        </div>
      )}
      
      {path === 'neet-online-courses' && (
        <div className="CourseCardSubContainer">
          <div className="CourseDetails">
            Full Year Courses (NEET UG) For <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {NeetFullYearData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
          <div className="CourseDetails">
            Short Term Online Courses (NEET UG) For <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {NeetShortTermData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
        </div>
      )}

      {path === 'neet-offline-courses' && (
        <div className="CourseCardSubContainer">
          <div className="CourseDetails">
            Full Year Offline Courses (NEET UG) For <span>2025 & 2026</span>
          </div>
          <div className="CourseCardComponent">
            {NeetFullYearData.map((item, index) => (
              <CardComponent key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseCard;
