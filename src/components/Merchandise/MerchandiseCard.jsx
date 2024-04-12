// import {MerchandiseDataPYQ} from '../../Data/Merchandise';
// import MerchandiseData from '../../Data/Merchandise';
// import CardComponent from '../CardComponent/CardComponent';

import { useNavigate } from 'react-router-dom';
import {
  MerchandiseData,
  MerchandiseDataCapsPYQ,
  MerchandiseDataDlpBooks,
  MerchandiseDataJeeMainPYQ,
  MerchandiseDataNeetPYQ,
} from '../../Data/Merchandise';
import DescNewCardComponent from '../CardComponent/DescCardComponent';
import NewCardComponent from '../CardComponent/NewCardComponent';

const MerchandiseCard = () => {
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    navigate(`/merchandise/${item.title}`);
  };
  return (
    <div className="MerchandiseCardMainContainer">
      <div className="MerchandiseCardSubContainer">
        <div className="MerchandiseDetails">
          Book store
          {/* jee main and advanced pyqs */}
          <div className="MerchandiseSubDetails">
            📚 JEE Main and Advanced PCM PYQ Books and Short Notes :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseData.map((item, index) => (
              <div className="ankertag">
                <NewCardComponent key={index} data={item} onClick={handleCardClick(item)} />
              </div>
            ))}
          </div>
          {/* jee mains pyqs */}
          <div className="MerchandiseSubDetails">📚 JEE Main PYQ Individual Books :</div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataJeeMainPYQ.map((item, index) => (
              <div className="ankertag" >
                <NewCardComponent key={index} data={item}  onClick={handleCardClick(item)}/>
              </div>
            ))}
          </div>
          {/* 36 years pyqs */}
          <div className="MerchandiseSubDetails">
            📚 36 Years NEET PYQ Books :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataNeetPYQ.map((item, index) => (
              <div className="ankertag"  >
                <NewCardComponent key={index} data={item} onClick={handleCardClick(item)} />
              </div>
            ))}
          </div>
          <div className="MerchandiseSubDetails">
            📚 Advanced Practice Sessions (CAPS) Books:
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataCapsPYQ.map((item, index) => (
              <div className="ankertag" >
                <NewCardComponent key={index} data={item} onClick={handleCardClick(item)} />
                {/* <img src={item.src} alt="" /> */}
              </div>
            ))}
          </div>
          {/*  Dlp material */}
          <div className="MerchandiseSubDetails">
            📚 DLP Books For JEE Mains and Advanced :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataDlpBooks.map((item, index) => (
              <div className="ankertag">
                <DescNewCardComponent key={index} data={item}  onClick={handleCardClick(item)}/>
                {/* <img src={item.src} alt="" /> */}
              </div>
            ))}
          </div>
        </div>

        {/*------------------------------------------ bootle store------------------------------------------------------------------------- */}

        {/* <div className="MerchandiseDetails">Bottle store</div>
        <div className="MerchandiseCardComponent">
          {MerchandiseData.map((item, index) => (
            <NewCardComponent key={index} data={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default MerchandiseCard;
