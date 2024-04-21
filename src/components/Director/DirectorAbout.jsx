import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { directors } from '../../Data/DirectorData';

// import {cards} from '../../components/Director/Director.jsx'

export const DirectorAbout = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const temp = directors;
    // find director from directors name
    setData(temp.find((item) => item.name === name));
  }, [name]); // eslint-disable

  return (
    <div className="director-about-component">
      <div className="container">
        <div className="info-and-video">
          {data && (
            <div className="info">
              <h2 className='name'>{data.name}</h2>
              <br />
              <p>{data.about}</p>
            </div>
          )}

          <div className="video">
        
            {data && (
              <iframe
                // width="560"
                // height="315"
                src={data.videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
