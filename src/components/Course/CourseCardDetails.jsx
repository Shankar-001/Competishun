import { useNavigate, useParams } from 'react-router-dom';
import {
  CommonCourseData,
  SingleCourseDetails,
} from '../../Data/CourseDetailsData';
import { useEffect } from 'react';

const CourseCardDetails = () => {
  const { courseDetails } = useParams();
  const data = SingleCourseDetails[courseDetails];
  const navigate = useNavigate();

  useEffect(() => {
    if (!SingleCourseDetails[courseDetails]) {
      navigate('/');
    }
  }, [navigate, data]);

  return (
    <div className="CourseCardMainContainer">
      {data && (
        <div className="CourseCardSubContainer">
          <div>
            <h1>{data.Title}</h1>
            <h3>About Course</h3>
            <p>{data.AboutCourse}</p>
          </div>

          <div>
            <h3>
              Course Duration: <span>{data.CourseDuration}</span>
            </h3>
          </div>

          <div>
            <h3>Fee Structure</h3>
            <p>{data.FeeStructure}</p>
          </div>
          {data.InstallmentDetails && (
            <div>
              <h3>Installment Details</h3>
              <ul>
                {data.InstallmentDetails?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {data.RefundPolicy && (
            <div>
              <h3>Refund Policy</h3>
              <p>{data.RefundPolicy}</p>
            </div>
          )}

          <div className="CommonCourse">
            <h3>Course Features</h3>
            <ul>
              {CommonCourseData.CourseFeatures.map((feature, index) => (
                <li key={index}>{`${index + 1}. ${feature}`}</li>
              ))}
            </ul>
            <h3>Why Join Us? Competishun Advantage!</h3>
            <ul>
              {CommonCourseData.Advantages.map((advantage, index) => (
                <li key={index}>{`${index + 1}. ${advantage}`}</li>
              ))}
            </ul>

            <div>
              <h2>{CommonCourseData.choose}</h2>
              <h2>{CommonCourseData.contact}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseCardDetails;
