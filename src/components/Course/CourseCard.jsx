import {
  JeeFullYearData,
  NeetFullYearData,
  ShortTermData,
} from '../../Data/CourseData';
import CardComponent from '../CardComponent/CardComponent';

const CourseCard = () => {
  return (
    <div className="CourseCardMainContainer">
      <div className="CourseCardSubContainer">
        <div className="CourseDetails">
          Full Year Courses (JEE MAIN +ADV) For <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {JeeFullYearData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))}
        </div>
        <div className="CourseDetails">
          SHORT TERM COURSES (JEE MAIN+ADV) For <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {ShortTermData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))}
        </div>
        <div className="CourseDetails">
          FULL YEAR COURSES (NEET UG) For <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {NeetFullYearData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
