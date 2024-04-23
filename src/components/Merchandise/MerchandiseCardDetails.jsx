import React, { useEffect } from 'react';
import { MerchandiseSingleCardDetails } from '../../Data/MerchandiseSingleCardDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { SlPencil } from 'react-icons/sl';

export const MerchandiseCardDetails = () => {
  const navigate = useNavigate();
  const { merchandiseDetails } = useParams();
  const data = MerchandiseSingleCardDetails[merchandiseDetails];

  useEffect(() => {
    if (!MerchandiseSingleCardDetails[merchandiseDetails]) {
      navigate('/');
    }
  }, [navigate, data]);

  return (
    <div className="Merchandise-about-container">
      <div className="about-content">
        {data && (
          <div>
            <h2>{data.title}</h2>
            <p>
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet1}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet2}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet2}
            </p>
            <p>
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet3}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet4}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet5}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet6}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet7}
            </p>
            <p>
              {' '}
              <span>
                <SlPencil />
              </span>{' '}
              {data.about.bullet8}
            </p>

            <a href={data.link} target="blank" className="buy-now-btn">
              Buy Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default MerchandiseCardDetails;
