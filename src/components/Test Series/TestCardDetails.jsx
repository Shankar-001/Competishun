import { useNavigate, useParams } from 'react-router-dom';
import { SingleTestDetails } from '../../Data/TestDetailsData';
import { useEffect, useState } from 'react';
import JoinNow from '../../utils/Button/JoinNow';

const TestCardDetails = () => {
  const { testSeriesDetails } = useParams();
  const data = SingleTestDetails[testSeriesDetails];
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('StartDate');

  //   useEffect(() => {
  //     if (!SingleTestDetails[testSeriesDetails]) {
  //       navigate('/');
  //     }
  //   }, [navigate, data]);

  return (
    <div className="TestCardMainContainer">
      {data && (
        <div className="TestCardSubContainer">
          <div className="TestTitle">
            <div>
            <h1>{data.Title}</h1>
            <p>{data.Announcement}</p>
            </div>
            <JoinNow data={data} />
          </div>

          <div className="TestMiddleContent">
            <div className="TestDetailsLeft">
              <div className="TestMenu">
                {data.StartDate && (
                  <h3
                    onClick={() => setSelectedContent('StartDate')}
                    className={selectedContent === 'StartDate' ? 'active' : ''}
                  >
                    Start Date
                  </h3>
                )}

                {data.Validity && (
                  <h3
                    onClick={() => setSelectedContent('Validity')}
                    className={selectedContent === 'Validity' ? 'active' : ''}
                  >
                    Validity
                  </h3>
                )}

                {data.Target && (
                  <h3
                    onClick={() => setSelectedContent('Target')}
                    className={selectedContent === 'Target' ? 'active' : ''}
                  >
                    Target
                  </h3>
                )}

                {data.FeeStructure && (
                  <h3
                    onClick={() => setSelectedContent('FeeStructure')}
                    className={
                      selectedContent === 'FeeStructure' ? 'active' : ''
                    }
                  >
                    Fee Structure
                  </h3>
                )}

                {data.TestNumber && (
                  <h3
                    onClick={() => setSelectedContent('TestNumber')}
                    className={selectedContent === 'TestNumber' ? 'active' : ''}
                  >
                    Number of test
                  </h3>
                )}

                {data.DownloadSchedule && (
                  <h3
                    onClick={() => setSelectedContent('DownloadSchedule')}
                    className={
                      selectedContent === 'DownloadSchedule' ? 'active' : ''
                    }
                  >
                    Download Schedule
                  </h3>
                )}

                {data.HowToEnroll && (
                  <h3
                    onClick={() => setSelectedContent('HowToEnroll')}
                    className={
                      selectedContent === 'HowToEnroll' ? 'active' : ''
                    }
                  >
                    How To Enroll
                  </h3>
                )}

                {data.KeyFeature && (
                  <h3
                    onClick={() => setSelectedContent('KeyFeature')}
                    className={selectedContent === 'KeyFeature' ? 'active' : ''}
                  >
                    Key Feature
                  </h3>
                )}

                {data.ComplimentaryAccess && (
                  <h3
                    onClick={() => setSelectedContent('ComplimentaryAccess')}
                    className={
                      selectedContent === 'ComplimentaryAccess' ? 'active' : ''
                    }
                  >
                    Complimentary Access
                  </h3>
                )}
              </div>
            </div>

            <div className="TestDetailsRight">
              {selectedContent && (
                <>
                  {selectedContent === 'StartDate' && (
                    <>
                      <h3>Start Date</h3>
                      <p>{data.StartDate}</p>
                    </>
                  )}

                  {selectedContent === 'Validity' && (
                    <>
                      <h3>Validity</h3>
                      <p>{data.Validity}</p>
                    </>
                  )}

                  {selectedContent === 'Target' && (
                    <>
                      <h3>Target</h3>
                      <p>{data.Target}</p>
                    </>
                  )}

                  {selectedContent === 'FeeStructure' && (
                    <>
                      <h3>Fee Structure</h3>
                      <p>{data.FeeStructure}</p>
                    </>
                  )}

                  {selectedContent === 'TestNumber' && (
                    <>
                      <h3>Number of Tests</h3>
                      <p>{data.TestNumber}</p>
                    </>
                  )}

                  {selectedContent === 'DownloadSchedule' && (
                    <div className="downloadSchedule">
                      <a
                        href={data.DownloadSchedule}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Schedule
                      </a>
                    </div>
                  )}

                  {selectedContent === 'HowToEnroll' && (
                    <>
                      <h3>How To Enroll</h3>
                      <div className="HowToEnrollContainer">
                        <p>
                          <strong>Website:</strong>{' '}
                          <a
                            href={data.HowToEnroll.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click Here
                          </a>
                        </p>
                        <p>
                          <strong>App:</strong> {data.HowToEnroll.App}
                        </p>
                        <p>
                          <strong>Contact:</strong> {data.HowToEnroll.contact}
                        </p>
                      </div>
                    </>
                  )}

                  {selectedContent === 'KeyFeature' && (
                    <>
                      <h3>Key Feature</h3>
                      <ul>
                        {data.KeyFeature.map((feature, index) => (
                          <li key={index}>{`${index + 1}. ${feature}`}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {selectedContent === 'ComplimentaryAccess' && (
                    <>
                      <h3>Complimentary Access</h3>
                      <p>{data.ComplimentaryAccess}</p>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="CommonTest">
            <div className="TestContact">
              <h2>{data.Choose}</h2>
              <h2>{data.Contact}</h2>
            </div>

            <JoinNow data={data} />
          </div>
        </div>
      )}
    </div>
  );
};
export default TestCardDetails;
