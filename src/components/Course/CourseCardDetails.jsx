import { useNavigate, useParams } from 'react-router-dom';
import { SingleCourseDetails } from '../../Data/CourseDetailsData';
import { useEffect, useState } from 'react';
import playImg from '../../assets/ic-play.svg';
import Modal from '../../utils/Modal';
import JoinNow from '../../utils/Button/JoinNow';

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

  const sections = [
    { key: 'AboutCourse', label: 'About Course', isAvailable: data.AboutCourse },
    {
      key: 'CourseDuration',
      label: 'Course Duration',
      isAvailable: data.CourseDuration,
    },
    {
      key: 'LectureNumber',
      label: 'Number of Lectures',
      isAvailable: data.LectureNumber,
    },
    { key: 'FeeStructure', label: 'Fee Structure', isAvailable: data.FeeStructure },
    {
      key: 'OfflineFeeStructure',
      label: 'Fee Structure',
      isAvailable: data.OfflineFeeStructure,
    },
    {
      key: 'InstallmentDetails',
      label: 'Installment Details',
      isAvailable: data.InstallmentDetails,
    },
    { key: 'KeyFeature', label: 'Key Feature', isAvailable: data.KeyFeature },
    {
      key: 'CourseFeatures',
      label: 'Course Features',
      isAvailable: data.CourseFeatures,
    },
    {
      key: 'CourseFeatureWithoutVideo',
      label: 'Course Features',
      isAvailable: data.CourseFeatureWithoutVideo,
    },
    {
      key: 'Advantages',
      label: 'Why Join Us? Competishun Advantage!',
      isAvailable: data.Advantages,
    },
    { key: 'Stages', label: 'Preparation Stages', isAvailable: data.Stages },
    { key: 'GeneralQNA', label: 'General Question', isAvailable: data.GeneralQNA },
    {
      key: 'OnlineVsOffline',
      label: 'Online Vs Offline',
      isAvailable: data.OnlineVsOffline,
    },
    {
      key: 'KotaVsJaipurVsHome',
      label: 'Kota vs Jaipur vs Home',
      isAvailable: data.KotaVsJaipurVsHome,
    },
    { key: 'RefundPolicy', label: 'Refund Policy', isAvailable: data.RefundPolicy },
    {
      key: 'ShortTermRefundPolicy',
      label: 'Refund Policy',
      isAvailable: data.ShortTermRefundPolicy,
    },
  ];

  return (
    <div className="CourseCardMainContainer">
      {data && (
        <div className="CourseCardSubContainer">
          <div className="CourseTitle">
            <h1>{data.Title}</h1>

            <JoinNow data={data.JoinNow} />
          </div>

          <div className="CourseMiddleContent">
            <div className="CourseDetailsLeft">
              <div className="CourseMenu">
                {sections.map(
                  (section) =>
                    section.isAvailable && (
                      <h3
                        key={section.key}
                        onClick={() => setSelectedContent(section.key)}
                        className={
                          selectedContent === section.key ? 'active' : ''
                        }
                      >
                        {section.label}
                      </h3>
                    )
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
                    <>
                      <h3>Course Duration</h3>
                      <p>{data.CourseDuration}</p>
                    </>
                  )}

                  {selectedContent === 'LectureNumber' && (
                    <>
                      <h3>Number of Lectures</h3>
                      <p>{data.LectureNumber}</p>
                    </>
                  )}

                  {selectedContent === 'FeeStructure' && (
                    <>
                      <h3>Fee Structure</h3>
                      <ul>
                        {data.FeeStructure.split('\n').map((line, index) => (
                          <li key={index}>{line}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {selectedContent === 'OfflineFeeStructure' && (
                    <>
                      <h2>Fee Structure</h2>
                      <FeeStructureComponent data={data} />
                    </>
                  )}

                  {selectedContent === 'KeyFeature' && (
                    <>
                      <h3>Key Feature</h3>
                      <p>{data.KeyFeature}</p>
                    </>
                  )}

                  {selectedContent === 'InstallmentDetails' && (
                    <div>
                      <h3>Installment Details</h3>
                      <ul>
                        {data.InstallmentDetails.map((detail, index) => {
                          const [amountDetail, urlPart] = detail.split(' (');
                          const url = urlPart ? urlPart.slice(0, -1) : null;

                          return (
                            <li key={index}>
                              <p>{amountDetail}</p>{' '}
                              {url && (
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Pay Now &gt;&gt;&gt;
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {selectedContent === 'CourseFeatureWithoutVideo' && (
                    <div>
                      <h3>Course Features</h3>
                      <ul>
                        {data.CourseFeatureWithoutVideo.map(
                          (feature, index) => (
                            <li key={index}>{`${index + 1}. ${feature}`}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {selectedContent === 'CourseFeatures' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseContentSpecial">
                        <h3>Course Features</h3>
                        <ul>
                          {data.CourseFeatures.map((feature, index) => (
                            <li key={index}>{`${index + 1}. ${feature}`}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.CourseFeatureThumbnail}
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
                        videoUrl={data.CourseFeatureVideo}
                      />
                    </div>
                  )}

                  {selectedContent === 'Advantages' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseContentSpecial">
                        <h3>Why Join Us? Competishun Advantage!</h3>
                        <ul>
                          {data.Advantages.map((advantage, index) => (
                            <li key={index}>{`${index + 1}. ${advantage}`}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.AdvantageThumbnail}
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
                        videoUrl={data.AdvantagesVideo}
                      />
                    </div>
                  )}

                  {selectedContent === 'Stages' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.StagesThumbnail}
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
                        videoUrl={data.Stages}
                      />
                    </div>
                  )}

                  {selectedContent === 'GeneralQNA' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.GeneralPointThumbnail}
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
                        videoUrl={data.GeneralQNA}
                      />
                    </div>
                  )}

                  {selectedContent === 'OnlineVsOffline' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.OnlineVsOfflineThumbnail}
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
                        videoUrl={data.OnlineVsOffline}
                      />
                    </div>
                  )}

                  {selectedContent === 'KotaVsJaipurVsHome' && (
                    <div className="courseDetailsVideo">
                      <div className="CourseImgBlock" onClick={handleShowModal}>
                        <img
                          src={data.KotaVsJaipurVsHomeThumbnail}
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
                        videoUrl={data.KotaVsJaipurVsHome}
                      />
                    </div>
                  )}

                  {selectedContent === 'RefundPolicy' && (
                    <div className="refundPolicy">
                      <a
                        href={data.RefundPolicy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Refund Policy
                      </a>
                    </div>
                  )}

                  {selectedContent === 'ShortTermRefundPolicy' && (
                    <div className="ShortTermRefundPolicy">
                      <h3>Refund Policy</h3>
                      <p>
                        <strong>!! </strong>
                        {data.ShortTermRefundPolicy.split('\n').map(
                          (line, index) => (
                            <span key={index}>
                              {index > 0 ? <br /> : null}
                              {line}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="CommonCourse">
            <div className="CourseContact">
              <h2>{data.Choose}</h2>
              <h2>{data.Contact}</h2>
            </div>

            <JoinNow data={data.JoinNow} />
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseCardDetails;

const FeeStructureComponent = ({ data }) => {
  return (
    <div>
      {Object.entries(data.OfflineFeeStructure).map(
        ([enrollmentType, enrollmentDetails]) => (
          <div key={enrollmentType} className="CourseEnrollmentType">
            <h3>{enrollmentType}</h3>
            {Object.entries(enrollmentDetails).map(
              ([percentileRange, fees]) => (
                <div key={percentileRange} className="CoursePercentageRange">
                  <h4>{percentileRange}</h4>
                  <ul>
                    {fees.map((feeDetail, index) => (
                      <li key={index}>{`${index + 1}. ${feeDetail}`}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};
