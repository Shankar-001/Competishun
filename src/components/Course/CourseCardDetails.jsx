import { useNavigate, useParams } from 'react-router-dom';
import {
  CommonCourseData,
  SingleCourseDetails,
} from '../../Data/CourseDetailsData';
import { useEffect, useState } from 'react';
import playImg from '../../assets/ic-play.svg';
import Modal from '../../utils/Modal';

const CourseCardDetails = () => {
  const { courseDetails } = useParams();
  const data = SingleCourseDetails[courseDetails];
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('AboutCourse');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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

                <h3
                  onClick={() => setSelectedContent('Stages')}
                  className={selectedContent === 'Stages' ? 'active' : ''}
                >
                  Preparation Stages
                </h3>

                <h3
                  onClick={() => setSelectedContent('GeneralQNA')}
                  className={selectedContent === 'GeneralQNA' ? 'active' : ''}
                >
                  General Question
                </h3>

                <h3
                  onClick={() => setSelectedContent('OnlineVsOffline')}
                  className={
                    selectedContent === 'OnlineVsOffline' ? 'active' : ''
                  }
                >
                  Online Vs Offline
                </h3>

                <h3
                  onClick={() => setSelectedContent('KotaVsJaipurVsHome')}
                  className={
                    selectedContent === 'KotaVsJaipurVsHome' ? 'active' : ''
                  }
                >
                  Kota vs Jaipur vs Home
                </h3>

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
              </div>
            </div>

            <div className="CourseDetailsRight">
              {selectedContent && (
                <>
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
                    <div className="refundPolicy">
                      {/* <h3>Refund Policy</h3> */}
                      <a
                        href={data.RefundPolicy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Refund Policy
                      </a>
                    </div>
                  )}

                  {selectedContent === 'Stages' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.Stages}
                      />
                    </div>
                  )}

                  {selectedContent === 'GeneralQNA' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.GeneralQNA}
                      />
                    </div>
                  )}

                  {selectedContent === 'OnlineVsOffline' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.OnlineVsOffline}
                      />
                    </div>
                  )}

                  {selectedContent === 'KotaVsJaipurVsHome' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.KotaVsJaipurVsHome}
                      />
                    </div>
                  )}

                  {selectedContent === 'CourseFeatures' && (
                    <div className="courseDetailsVideo">
                      <div className="Hello">
                        <h3>Course Features</h3>
                        <ul>
                          {CommonCourseData.CourseFeatures.map(
                            (feature, index) => (
                              <li key={index}>{`${index + 1}. ${feature}`}</li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.CourseFeatureVideo}
                      />
                    </div>
                  )}

                  {selectedContent === 'Advantages' && (
                    <div className="courseDetailsVideo">
                      <div className="Hello">
                        <h3>Why Join Us? Competishun Advantage!</h3>
                        <ul>
                          {CommonCourseData.Advantages.map(
                            (advantage, index) => (
                              <li key={index}>{`${
                                index + 1
                              }. ${advantage}`}</li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={CommonCourseData.src}
                          className="CourseImg"
                          loading="lazy"
                        />
                        <img
                          src={playImg}
                          alt="Play"
                          className="CoursePlayBtn"
                          loading="lazy"
                        />
                      </div>
                      <Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        videoUrl={CommonCourseData.AdvantagesVideo}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="CommonCourse">
            <div className="CourseContact">
              <h2>{CommonCourseData.Choose}</h2>
              <h2>{CommonCourseData.Contact}</h2>
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
