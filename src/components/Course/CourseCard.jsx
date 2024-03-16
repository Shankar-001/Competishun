import CourseData from '../../Data/CourseData';

const CourseCard = () => {
  return (
    <div className="CourseCardMainContainer">
      <div className="CourseCardSubContainer">
        <div className="CourseDetails">
          Courses For <span>2025 & 2026</span>
        </div>
        <div className="CourseCardComponent">
          {CourseData.map((item, index) => (
            <CourseCardComponent key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CourseCard;

const CourseCardComponent = ({ data }) => {
  return (
    <div className="ComponentDivision">
      <img src={data.src} alt="Course" />
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  );
};
