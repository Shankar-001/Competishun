import { useNavigate, useParams } from 'react-router-dom';
import { SingleTestDetails } from '../../Data/TestDetailsData';
import { useEffect, useState } from 'react';
import JoinNow from '../../utils/Button/JoinNow';

const TestCardDetails = () => {
  const { testSeriesDetails } = useParams();
  const data = SingleTestDetails[testSeriesDetails];
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('StartDate');

  useEffect(() => {
    if (!SingleTestDetails[testSeriesDetails]) {
      navigate('/');
    }
  }, [navigate, data]);

  const sections = [
    { key: 'StartDate', label: 'Start Date', isAvailable: data?.StartDate },
    { key: 'Validity', label: 'Validity', isAvailable: data?.Validity },
    { key: 'Target', label: 'Target', isAvailable: data?.Target },
    {
      key: 'FeeStructure',
      label: 'Fee Structure',
      isAvailable: data?.FeeStructure,
    },
    {
      key: 'TestNumber',
      label: 'Number of Tests',
      isAvailable: data?.TestNumber,
    },
    {
      key: 'DownloadSchedule',
      label: 'Download Schedule',
      isAvailable: data?.DownloadSchedule,
    },
    {
      key: 'HowToEnroll',
      label: 'How To Enroll',
      isAvailable: data?.HowToEnroll,
    },
    { key: 'KeyFeature', label: 'Key Feature', isAvailable: data?.KeyFeature },
    {
      key: 'ComplimentaryAccess',
      label: 'Complimentary Access',
      isAvailable: data?.ComplimentaryAccess,
    },
  ];

  return (
    <div className="TestCardMainContainer">
      {data && (
        <div className="TestCardSubContainer">
          <div className="TestTitle">
            <div>
              <h1>{data.Title}</h1>
              <p>{data.Announcement}</p>
            </div>
            <JoinNow data={data.JoinNow} />
          </div>

          <div className="TestMiddleContent">
            <div className="TestDetailsLeft">
              <div className="TestMenu">
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

            <JoinNow data={data.JoinNow} />
          </div>
        </div>
      )}
    </div>
  );
};
export default TestCardDetails;
