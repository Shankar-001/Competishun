// import {MerchandiseDataPYQ} from '../../Data/Merchandise';
// import MerchandiseData from '../../Data/Merchandise';
// import CardComponent from '../CardComponent/CardComponent';

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
  return (
    <div className="MerchandiseCardMainContainer">
      <div className="MerchandiseCardSubContainer">
        <div className="MerchandiseDetails">
          Book store
          {/* jee main and advanced pyqs */}
          <div className="MerchandiseSubDetails">
            📚 Jee Main and Advanced PCM PYQ Books and Short Notes :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseData.map((item, index) => (
              <a className="ankertag" target="blank" href={item.link}>
                <NewCardComponent key={index} data={item} />
              </a>
            ))}
          </div>
          {/* jee mains pyqs */}
          <div className="MerchandiseSubDetails">📚 Jee Main PYQ indivisible Books :</div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataJeeMainPYQ.map((item, index) => (
              <a className="ankertag" target="blank" href={item.link}>
                <NewCardComponent key={index} data={item} />
              </a>
            ))}
          </div>
          {/* 36 years pyqs */}
          <div className="MerchandiseSubDetails">
            📚 36 Years NEET PYQ Books :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataNeetPYQ.map((item, index) => (
              <a className="ankertag" target="blank" href={item.link}>
                <NewCardComponent key={index} data={item} />
              </a>
            ))}
          </div>
          <div className="MerchandiseSubDetails">
            📚 Advanced Practice Sessions (CAPS) Books:
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataCapsPYQ.map((item, index) => (
              <a className="ankertag" target="blank" href={item.link}>
                <NewCardComponent key={index} data={item} />
                {/* <img src={item.src} alt="" /> */}
              </a>
            ))}
          </div>
          {/*  Dlp material */}
          <div className="MerchandiseSubDetails">
            📚 DLP Books For JEE Mains and Advanced :
          </div>
          <div className="MerchandiseCardComponent">
            {MerchandiseDataDlpBooks.map((item, index) => (
              <a className="ankertag" target="blank" href={item.link}>
                <DescNewCardComponent key={index} data={item} />
                {/* <img src={item.src} alt="" /> */}
              </a>
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
