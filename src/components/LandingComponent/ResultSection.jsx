import React from 'react';
// import './MyComponent.scss';
import img from '../../assets/Gallery/Celebration/celebration21.jpg';
import leaf from '../../assets/oneLeaf.png';

const ResultSection = () => {
  const JeeMainsResult = [
    {
      title: '🎯JEE Main Results',
      description: 'Best and quality results from Jee Mains Exam',
      numbers1: '1924',
      numbers2: '1730',
      numbers3: '1542',
      selction: 'selections',
      year1: '2021',
      year2: '2022',
      year3: '2023',
    },
    {
      title: '🎯 JEE Advanced Results',
      description: 'Best and quality results from Jee Advanced Exam',
      numbers1: '775',
      numbers2: '752',
      numbers3: '339',
      selction: 'selections',
      year1: '2021',
      year2: '2022',
      year3: '2023',
    },
  ];
  return (
    <div className="result-main-conatiner">
      <div className="my-component">
        <div className="heading">Competishun Results</div>
        <div className="content-container">
          <div className="component">
            {JeeMainsResult.map((result, index) => (
              <div key={index} className="component1data">
                <div className="sub-heading">{result.title}</div>
                <div className="description">{result.description}</div>
                <div className="numbers">
                  <span>
                    <div className="card">
                      <img className="left-img" src={leaf} alt="dslk" />
                      <div className="card-body">
                        <div className="year-name">{result.numbers1}</div>

                        {/* <h2 className="fw-bolder text-center mb-0">
                          <span>{result.selction}</span>
                        </h2> */}
                        <p className="text-center text-muted mb-0">
                          Selections
                        </p>
                        <p className='year'>{result.year1}</p>
                      </div>
                      <img src={leaf} alt="dslk" />
                    </div>
                  </span>
                  <span>|</span>
                  <span>
                  <div className="card">
                      <img className="left-img" src={leaf} alt="dslk" />
                      <div className="card-body">
                        <div className="year-name">{result.numbers1}</div>
                        {/* <h2 className="fw-bolder text-center mb-0">
                          <span>{result.selction}</span>
                        </h2> */}
                        <p className="text-center text-muted mb-0">
                          Selections
                        </p>
                        <p className='year'>{result.year2}</p>
                      </div>
                      <img src={leaf} alt="dslk" />
                    </div>
                  </span>{' '}
                  {/* Fixed typo here */}
                  <span className=''>|</span>
                  <span>
                  <div className="card">
                      <img className="left-img" src={leaf} alt="dslk" />
                      <div className="card-body">
                        <div className="year-name">{result.numbers1}</div>
                        <p className="text-center text-muted mb-0">
                          Selections
                        </p>
                        <p className='year'>{result.year3}</p>
                      </div>
                      <img src={leaf} alt="dslk" />
                    </div>
                  </span>
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
