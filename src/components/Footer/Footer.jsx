import CompanyLogo from '../../assets/loaderLogo.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { FaGooglePlay } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="footer-mainContainer">
      <div className="footer-containerContent">
        <div className="footer-innerContainer">
          {/* box1 */}
          <div className="footer-logo">
            <img
              src={CompanyLogo}
              alt="Competishun"
              className="footer-companyIcon"
            />
            <div className="footer-address">
              <FaLocationDot fontSize={12} color="orange" className="Icon" />

              <p>
                Plot number 35, Gopalpura Bypass Rd,
                <br /> near Riddhi Siddhi Circle, 10 B Scheme, Triveni Nagar,
                <br /> Gopal Pura Mode, Jaipur, Rajasthan 302020
              </p>
            </div>

            <div className="footer-address">
              <FaPhoneAlt fontSize={12} color="orange" className="Icon" />

              <p>+91 8888000021</p>
            </div>

            <div className="footer-address">
              <BiLogoGmail fontSize={12} color="orange" className="Icon" />

              <p>support@competishun.com</p>
            </div>
          </div>

          {/*  box2 */}
          <div className="footer-quickLinks">
            <h3>QUICK LINKS</h3>
            <br />
            <div className="element">
              <div className="footer-link">
                <li>
                  <NavLink to="/" className="footer-navlink">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className="footer-navlink">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/testSeries" className="footer-navlink">
                    Test Series
                  </NavLink>
                </li>
                {/* <li>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li> */}
                {/* <li>
            <NavLink to="/contact" className="navlink">
              Contact Us
            </NavLink>
          </li> */}
                <li>
                  <NavLink to="/result" className="footer-navlink">
                    Result
                  </NavLink>
                </li>
                {/* <div>Home</div>
            <div>Courses</div>
            <div>Test Series</div>
            <div>About</div>
            <div>Contact Us</div> */}
              </div>
            </div>
          </div>

          {/*  box3 */}
          <div classname="footer-support">
            <h3>SUPPORT</h3>
            <br />
            <a>FAQs</a>
            <br />
            <a>Contact Us</a>
            <br />
            <a>About us</a>
          </div>

          {/*  box4 */}
          <div classname="footer-joinUs">
            <h3>JOIN US ON</h3>
            <FaFacebook fontSize={25} />
            <FaYoutube fontSize={25} />
            <FaTwitter fontSize={25} />
            <FaTelegram fontSize={25} />
            <FaInstagram fontSize={25} />

            <br />
            <h3>DOWNLOAD OUR APP</h3>
            <p>Ebooks, Test Preparation, Video Lectures</p>
            <FaGooglePlay fontSize={25} />
            <IoLogoAppleAppstore fontSize={25} />
            <br />
          </div>
        </div>
        <h3 className="develop">Develop with ❤️</h3>
      </div>
    </div>
  );
};
export default Footer;

{
  /* <FaInstagram fontSize={100} className="insta" /> */
}
