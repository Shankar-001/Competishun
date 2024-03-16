import CourseData from '../../Data/CourseData';
import CardComponent from '../CardComponent/CardComponent';

const CourseCard = () => {
  return (
    <div className="CourseCardMainContainer">
      <div className="CourseCardSubContainer">
        <div className="CourseDetails">
          Courses For <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {CourseData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CourseCard;


