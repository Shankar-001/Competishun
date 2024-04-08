import { useNavigate, useParams } from 'react-router-dom';
import { SingleCourseDetails } from '../../Data/CourseData';
import { useEffect } from 'react';

const CourseCardDetails = () => {
  const { courseDetails } = useParams();
  const data = SingleCourseDetails[courseDetails];
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!check[courseDetails]) {
  //     navigate('/');
  //   }
  // }, [navigate, data]);

  return (
    <div className="CourseCardMainContainer">
      <div className="CourseCardSubContainer">{data?.aboutUs}</div>
    </div>
  );
};
export default CourseCardDetails;
