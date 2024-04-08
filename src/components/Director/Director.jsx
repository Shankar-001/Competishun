import React from 'react';
import img1 from '../../assets/ABJ SIR-1.png';
import img2 from '../../assets/ALK SIR-1.png';
import img3 from '../../assets/MT SIR.png';
import img4 from '../../assets/NS SIR.png';

export const Director = () => {
  const cards = [
    {
      image: img1,
      name: 'Amit Bijarnia Sir (ABJ Sir)',
      subject :'Physics',
      description: ' 14 Years | B. Tech., IIT Delhi',
    },
    {
      image: img2,
      name: 'Alok Sir (ALK Sir)',
      subject: 'Physical and Inorganic Chemistry',
      description: ' 18 Years | B. Tech., NIT Allahabad',
    },
    {
      image: img3,
      name: 'Mohit Tyagi Sir (MT Sir)',
      subject: 'Mathematics',
      description: '22 Years | B. Tech., IIT Delhi',
    },
    {
      image: img4,
      name: 'Neeraj Saini Sir (NS Sir)',
      subject : 'Organic Chemistry',
      description:'16 Years | M.Sc. Chemistry',
    },
  ];
  return (
    <div className="director-card">
      <div className="my_card-container">
        {cards.map((card, index) => (
          <div key={index} className="inner_card">
            <img src={card.image} alt={card.name} className="image" />
            <div className="text-content">
              <div className="name">{card.name}</div>
              <div className='description'>
              <h3>{card.subject}</h3>
              <p className='sub'>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
