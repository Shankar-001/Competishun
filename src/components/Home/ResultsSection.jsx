import React from 'react';
import resultData from '../../Data/ResultData';

const ResultsSection = () => {
  return (
    <div className="resultSection">
      <div className="containerMain">
        {/* <h1>Results</h1> */}

        <section id="result">
          {resultData.map((result, index) => (
            <div className="container" key={index}>
              <div className="row">
                <div className="inner-row">
                  <h6 className="badge">{result.title}</h6>
                  
                  <h2 className="mb-0 display-3 fw-bolder">{result.heading}</h2>
                </div>
              </div>

              <div className="row mt-6">
                <div className="col-12">
                  <div className="card-group card-border card-border-lg border-primary shadow-light-lg lift lift-lg">
                    {result.data.map((data, ind) => (
                      <div className="card" key={ind}>
                        <img className='left-img' src='/src/assets/oneLeaf.png' alt='dslk'/>
                        <div className="card-body">
                          <div className="year-name">{data.year}</div>

                          <h2 className="fw-bolder text-center mb-0">
                            <span>{data.selection}</span>
                          </h2>
                          <p className="text-center text-muted mb-0">
                            Selections
                          </p>
                        </div>
                        <img src='/src/assets/oneLeaf.png' alt='dslk'/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResultsSection;
