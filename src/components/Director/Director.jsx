import React, { useState } from 'react';
import {useNavigate ,useParams} from 'react-router-dom' ;

import { DirectorAbout } from './DirectorAbout';
import { directors } from '../../Data/DirectorData';


export const Director = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);
  const navigate = useNavigate();
  const cards = directors;

  const handleClick = (index) => {
    // setSelectedDirector(cards[index]);
    navigate(`director/${cards[index]?.name}`);  
  };
  return (
    <div className="director-card">
      <div className="my_card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="inner_card"
          >
            <img src={card.image} alt={card.name} className="image" onClick={() => handleClick(index)} />
            <div className="text-content">
              <div className="name">{card.name}</div>
              <div className="description">
                <h3>{card.subject}</h3>
                <p className="sub">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {selectedDirector && (
        <div className="director-info">
          <h2>{selectedDirector.name}</h2>
          <p>{selectedDirector.about}</p>
          <button onClick={() => setSelectedDirector(null)}>Close</button>
        </div>
      )} */}

      {selectedDirector && (
        <DirectorAbout
          name={selectedDirector.name}
          about={selectedDirector.about}
        />
      )}
    </div>
  );
};
