import React from 'react';
import img1 from '../../assets/ABJ SIR-1.png';
import img2 from '../../assets/ALK SIR-1.png';
import img3 from '../../assets/MT SIR.png';
import img4 from '../../assets/NS SIR.png';

const LandingDirector = () => {
  const data = [
    {
      name: 'MT sir',
      message:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: img3,
    },
    {
      name: 'ALK sir',
      message:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.r',
      image: img2,
    },
    {
      name: 'ABJ Sir',
      message:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
      image: img1,
    },
    {
      name: 'NS Sir',
      message:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: img4,
    },
  ];
  return (
    <div className="landing-director-component">
      <div className="width-container">
        <div className="header">
          <h1>
            {/* Bharat’s <span>Biggest & Most Trusted </span>Educational Platform */}
            Message from the Director
          </h1>
        </div>
        <div className="content">
          {data.map((item, index) => (
            <DirectorContainer
              key={index}
              name={item.name}
              message={item.message}
              imgUrl={item.image}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingDirector;

const DirectorContainer = ({
  name = '',
  message = '',
  imgUrl = '',
  align = 'left',
}) => {
  if (align === 'left') {
    return (
      <div
        className="director-container"
        style={{ justifyContent: 'flex-start' }}
      >
        <CircularImageContainer imgUrl={imgUrl} name={name} />
        <MessageContainer name={name} message={message} align={align} />
      </div>
    );
  } else {
    return (
      <div
        className="director-container"
        style={{ justifyContent: 'flex-end' }}
      >
        <MessageContainer name={name} message={message} align={align} />
        <CircularImageContainer imgUrl={imgUrl} name={name} />
      </div>
    );
  }
};

const CircularImageContainer = ({ imgUrl = '', name = 'mohit tyagi' }) => {
  return (
    <div className="image-container">
      <div className="image">
        <img src={imgUrl} alt="Mohit Tyagi" />
      </div>
      <div className="dir-name">{name}</div>
      <div className="dot-path"></div>
      <div className="dots">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
    </div>
  );
};

const MessageContainer = ({ name = '', message = '', align = 'left' }) => {
  return (
    <div className={`message-container ${align}`}>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
};
