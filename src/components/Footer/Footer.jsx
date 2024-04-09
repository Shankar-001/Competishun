import CompanyLogo from '../../assets/loaderLogo.png';
import eduCompetishun from '../../assets/eduCompetishun.png';
import competishunDigital from '../../assets/competishunDigital.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
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
                Tower-2, Plot number 35, Gopalpura Bypass Rd,
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
            {/* <br /> */}
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
          <div className="footer-support">
            <h3>SUPPORT</h3>
            {/* <br /> */}
            <div className="footer-support-link">
              <div className="point">
                <a>FAQs</a>
              </div>

              <div className="point">
                <a>Contact Us</a>
              </div>

              <div className="point">
                {/* <a>About us</a> */}
                <NavLink to="/about" className="footer-navlink">
                    About Us
                  </NavLink>
              </div>
              <div className="point">
                <a>Refund and Cancellation</a>
              </div>
            </div>
          </div>

          {/*  box4 */}
          <div className="footer-joinUs">
            <h3>JOIN US ON</h3>

            <div className="socialMedia-logo">
             <a href='https://www.facebook.com/mohit.tyagi.775' target='_blank'><FaFacebook fontSize={32} color="#316FF6"/></a>
             <a href='https://www.youtube.com/@MohitTyagi' target='_blank'><FaYoutube fontSize={32} color="red" /></a>
              <a href='https://twitter.com/mohittyagi' target='_blank'><FaSquareXTwitter fontSize={32} color="black" /></a>
              <a href='https://t.me/competishun_official' target='_blank'><FaTelegram fontSize={32} color="#0088cc" /></a>
              <a href='https://www.instagram.com/competishun/?hl=en' target='_blank'><FaInstagram fontSize={32} color="#bc1888 "/></a>
            </div>

            <h3>DOWNLOAD OUR APP</h3>
            <p>Ebooks, Test Preparation, Video Lectures</p>
            <div className="appstore">
            <a href='https://play.google.com/store/apps/details?id=co.hodor.fcldn' target='_blank'><img src={eduCompetishun} alt="Edu-Competishun-App" className="app" /></a>
             <a href='https://play.google.com/store/apps/details?id=in.schoollog.competishun.tutorlog' target='_blank'><img src={competishunDigital} alt="Competishun-Digital" className="app" /></a>
            </div>
          </div>
        </div>
        <h3 className="develop">Developed with ❤️</h3>
      </div>
    </div>
  );
};
export default Footer;
