import { useNavigate } from 'react-router-dom';
import { TestData2025, TestData2026, TestDataAtsts } from '../../Data/TestData';
import CardComponent from '../CardComponent/CardComponent';

const TestCard = () => {
  const navigate = useNavigate();

  const TestData = {
    details: [
      {
        title: 'Full Year Test Series For Target JEE (Main+Adv)',
        year: '2025',
        data: TestData2025,
      },
      {
        title: 'Full Year Test Series For Target JEE (Main+Adv)',
        year: '2026',
        data: TestData2026,
      },
      {
        title:
          'Short Term Test Series For Target JEE Main, JEE Adv, BITSAT, WBJEE & MHTCET',
        year: '',
        data: TestDataAtsts,
      },
    ],
  };

  const handleCardClick = (item) => {
    navigate(`/testSeries/${item.title}`);
  };

  const TestDataCards = ({ detail }) => {
    const { title, data, year } = detail;

    return (
      <>
        <div className="TestDetails">
          {title} <span>{year}</span>
        </div>
        <div className="TestCardComponent">
          {data.map((item, index) => (
            <CardComponent
              key={index}
              data={item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="TestCardMainContainer">
      {TestData.details && (
        <div className="TestCardSubContainer">
          {TestData.details.map((detail, index) => (
            <TestDataCards key={index} detail={detail} />
          ))}
        </div>
      )}
    </div>
  );
};
export default TestCard;
