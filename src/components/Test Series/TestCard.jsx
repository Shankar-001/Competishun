import TestData from '../../Data/TestData';
import CardComponent from '../CardComponent/CardComponent';

const TestCard = () => {
  return (
    <div className="TestCardMainContainer">
      <div className="TestCardSubContainer">
        <div className="TestDetails">
          Test Series For <span>2025 & 2026</span>
        </div>
        <div className="TestCardComponent">
          {TestData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestCard;
