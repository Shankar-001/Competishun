import React from 'react';
// import './MyComponent.scss';
import img from '../../assets/Gallery/Celebration/celebration21.jpg';

const ResultSection = () => {
  const JeeMainsResult = [
    {
      title: '🎯Jee Main Result',
      description: 'Best and quality result from Jee Mains Exams',
      numbers1: '100',
      numbers2: '200',
      numbers3: '300',
      selction: 'selections',
    },
    {
      title: '🎯 Jee Advanced Result',
      description: 'Best and quality result from Jee Mains Exams',
      numbers1: '100',
      numbers2: '200',
      numbers3: '300',
      selction: 'selections',
    },
  ];
  return (
    <div className="result-main-conatiner">
      <div className="my-component">
        <div className="heading">Results</div>
        <div className="content-container">
          <div className="component">
            {JeeMainsResult.map((result, index) => (
              <div key={index} className="component1data">
                <div className="sub-heading">{result.title}</div>
                <div className="description">{result.description}</div>
                <div className="numbers">
                  <span>
                    {result.numbers1} <p>{result.selction}</p>
                  </span>
                  <span>|</span>
                  <span>
                    {result.numbers2} <p>{result.selction}</p>
                  </span>{' '}
                  {/* Fixed typo here */}
                  <span>|</span>
                  <span>
                    {result.numbers3} <p>{result.selction}</p>
                  </span>{' '}
                  {/* Fixed typo here */}
                </div>
                <hr />
              </div>
            ))}
            <button className="join-now-button">Join Now</button>
          </div>
          <div className="component2">
            <img src={img} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
