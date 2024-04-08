import { useNavigate, useParams } from 'react-router-dom';
import {
  CommonCourseData,
  SingleCourseDetails,
} from '../../Data/CourseDetailsData';
import { useEffect, useState } from 'react';

const CourseCardDetails = () => {
  const { courseDetails } = useParams();
  const data = SingleCourseDetails[courseDetails];
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('AboutCourse');

  useEffect(() => {
    if (!SingleCourseDetails[courseDetails]) {
      navigate('/');
    }
  }, [navigate, data]);

  return (
    <div className="CourseCardMainContainer">
      {data && (
        <div className="CourseCardSubContainer">
          <div className="CourseTitle">
            <h1>{data.Title}</h1>
          </div>

          <div className="CourseMiddleContent">
            <div className="CourseDetailsLeft">
              <div className="CourseMenu">
                <h3
                  onClick={() => setSelectedContent('AboutCourse')}
                  className={selectedContent === 'AboutCourse' ? 'active' : ''}
                >
                  About Course
                </h3>
                <h3
                  onClick={() => setSelectedContent('CourseDuration')}
                  className={
                    selectedContent === 'CourseDuration' ? 'active' : ''
                  }
                >
                  Course Duration
                </h3>
                <h3
                  onClick={() => setSelectedContent('FeeStructure')}
                  className={selectedContent === 'FeeStructure' ? 'active' : ''}
                >
                  Fee Structure
                </h3>
                {data.InstallmentDetails && (
                  <h3
                    onClick={() => setSelectedContent('InstallmentDetails')}
                    className={
                      selectedContent === 'InstallmentDetails' ? 'active' : ''
                    }
                  >
                    Installment Details
                  </h3>
                )}
                {data.RefundPolicy && (
                  <h3
                    onClick={() => setSelectedContent('RefundPolicy')}
                    className={
                      selectedContent === 'RefundPolicy' ? 'active' : ''
                    }
                  >
                    Refund Policy
                  </h3>
                )}
                <h3
                  onClick={() => setSelectedContent('CourseFeatures')}
                  className={
                    selectedContent === 'CourseFeatures' ? 'active' : ''
                  }
                >
                  Course Features
                </h3>
                <h3
                  onClick={() => setSelectedContent('Advantages')}
                  className={selectedContent === 'Advantages' ? 'active' : ''}
                >
                  Why Join Us? Competishun Advantage!
                </h3>
              </div>
            </div>

            <div className="CourseDetailsRight">
              {selectedContent && (
                <div className="CourseCardContent">
                  {selectedContent === 'AboutCourse' && (
                    <>
                      <h3>About Course</h3>
                      <p>{data.AboutCourse}</p>
                    </>
                  )}
                  {selectedContent === 'CourseDuration' && (
                    <h3>
                      Course Duration: <span>{data.CourseDuration}</span>
                    </h3>
                  )}
                  {selectedContent === 'FeeStructure' && (
                    <>
                      <h3>Fee Structure</h3>
                      <p>{data.FeeStructure}</p>
                    </>
                  )}
                  {selectedContent === 'InstallmentDetails' && (
                    <div>
                      <h3>Installment Details</h3>
                      <ul>
                        {data.InstallmentDetails.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedContent === 'RefundPolicy' && (
                    <>
                      {/* <h3>Refund Policy</h3> */}
                      <a
                        href={data.RefundPolicy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Refund Policy
                      </a>
                    </>
                  )}
                  {selectedContent === 'CourseFeatures' && (
                    <div>
                      <h3>Course Features</h3>
                      <ul>
                        {CommonCourseData.CourseFeatures.map(
                          (feature, index) => (
                            <li key={index}>{`${index + 1}. ${feature}`}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  {selectedContent === 'Advantages' && (
                    <div>
                      <h3>Why Join Us? Competishun Advantage!</h3>
                      <ul>
                        {CommonCourseData.Advantages.map((advantage, index) => (
                          <li key={index}>{`${index + 1}. ${advantage}`}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="CommonCourse">
            <div className="CourseContact">
              <h2>{CommonCourseData.choose}</h2>
              <h2>{CommonCourseData.contact}</h2>
            </div>

            <div className="CourseButton">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseCardDetails;
