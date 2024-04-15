import React from 'react';
import { FaGooglePlay, FaYoutube } from 'react-icons/fa6';
import { playstoreApps, youtubeChannels } from '../../Data/FreeStudy.data';

const FreeStudy = () => {
 
  return (
    <div className="freeStudy">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1>Free Study Resources</h1>
            <p>
              Here are some of the best free study resources available online.
            </p>
          </div>
        </div>

        <div className="row subhead">
          <FaYoutube fontSize={36} color="red" />
          <h3>Our YouTube Channels</h3>
        </div>
        <div className="row material_container">
          {youtubeChannels.map((item, index) => (
            <div className="material_card" key={index}>
              <div className="single-free-study">
                <div className="image">
                  <img src={item.image} alt="Free Study" />
                </div>
                <div className="content">
                  <h5>{item.heading}</h5>
                  {/* <span>{item.type}</span> */}
                  <p>{item.subHeading}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Visit Channel
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row subhead">
          <img src="/src/assets/playStore.svg" alt="playstore" />
          <h3>Our Android Apps</h3>
        </div>
        <div className="row material_container">
          {playstoreApps.map((item, index) => (
            <div className="material_card" key={index}>
              <div className="single-free-study">
                <div className="image">
                  <img src={item.image} alt="Free Study" />
                </div>
                <div className="content">
                  <h5>{item.heading}</h5>
                  {/* <span>{item.type}</span> */}
                  <p>{item.subHeading}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.type === 'Youtube' ? 'Visit Channel' : 'Download App'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeStudy;
