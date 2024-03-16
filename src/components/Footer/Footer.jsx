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

const Footer = () => {
  return (
    <div className="footer-mainContainer">
      <div className='footer-containerContent'>
      <div className="footer-innerContainer">
        {/* box1 */}
        <div className="footer-logo">
          <img
            src={CompanyLogo}
            alt="Competishun"
            className="footer-companyIcon"
          />
          <div className="footer-address">
            <FaLocationDot fontSize={12} color="orange" />
            <p>
              Plot number 35, Gopalpura Bypass Rd, near Riddhi Siddhi Circle,{' '}
              <br />
              10 B Scheme, Triveni Nagar, Gopal Pura Mode, Jaipur, Rajasthan
              302020
            </p>
          </div>

          <div className="footer-address">
            <FaPhoneAlt fontSize={12} color="orange" />

            <p>+91 8888000021</p>
          </div>

          <div className="footer-address">
            <BiLogoGmail fontSize={12} color="orange" />
            <p>support@competishun.com</p>
          </div>
        </div>

        {/*  box2 */}
        <div classname="footer-quickLinks">
          <h3>QUICK LINKS</h3>
          <br />
          <ul>
            <a>abc</a>
            <br />
            <a>xyz</a>
            <br />

            <a>poi</a>
            <br />

            <a>yui</a>
          </ul>
        </div>

        {/*  box3 */}
        <div classname="footer-support">
          <h3>SUPPORT</h3>
          <br />
          <a>FAQs</a>
          <br />
          <a>Contact Us</a>
          <br />
          <a>Career</a>
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
          <FaGooglePlay  fontSize={25}/>
          <IoLogoAppleAppstore  fontSize={25} />
          <br />
        </div>
      </div>
      <h3 className='develop'>Develop with ❤️</h3>
      </div>
    </div>
  );
};
export default Footer;

{
  /* <FaInstagram fontSize={100} className="insta" /> */
}
