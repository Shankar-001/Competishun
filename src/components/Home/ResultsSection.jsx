import React from 'react';

const ResultsSection = () => {
  return (
    <div className="resultSection">
      <div className="containerMain">
        <h1>Results</h1>

        <section id="result">
          <div className="container">
            <div className="row">
              <div className="inner-row">
                <h6 className="badge">
                  JEE Main 2024 (January)
                </h6>

                <h2 className="mb-0 display-3 fw-bolder">
                  Our Result: The Choice of Toppers
                </h2>
              </div>
            </div>

            <div className="row mt-6">
              <div className="col-12">
                <div className="card-group card-border card-border-lg border-primary shadow-light-lg lift lift-lg">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="fw-bolder text-center mb-0">
                        <span>455</span>
                      </h2>
                      <p className="text-center text-muted mb-0">
                        Scored{' '}
                        <span className="text-danger fw-bold">99+ percentile</span>{' '}
                        in Math in JEE Main January
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h2 className="fw-bolder text-center mb-0">
                        <span>4</span>
                      </h2>
                      <p className="text-center text-muted mb-0">
                        Scored{' '}
                        <span className="text-danger fw-bold">100 percentile</span>{' '}
                        in Math in JEE Main January
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h2 className="fw-bolder text-center mb-0">
                        <span>92</span>%
                      </h2>
                      <p className="text-center text-muted mb-0">
                        Felt{' '}
                        <span className="text-danger fw-bold">more confident</span>{' '}
                        in Math after the course
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResultsSection;
