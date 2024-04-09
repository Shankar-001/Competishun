import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Navbar = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(true);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollToTop(scrollY == 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCoursesMouseEnter = () => {
    setShowCoursesDropdown(true);
  };

  const handleCoursesMouseLeave = () => {
    setShowCoursesDropdown(false);
  };

  return (
    <div
      className={`Navbar-main-container ${
        location.pathname === '/' && showScrollToTop ? 'homeroute' : ''
      }`}
    >
      <div className="element">
        <Link to="/" className="image">
          <img src={logo} alt="Competishun-logo" />
        </Link>
        <div className="navbar-heading">
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={handleCoursesMouseEnter}
            onMouseLeave={handleCoursesMouseLeave}
          >
            <div className="navbar-course-details">
              <div className="li-navlink">Courses</div>
              <div>
                {showCoursesDropdown ? (
                  <RiArrowDropUpLine size={30} className="drop-arrow" />
                ) : (
                  <RiArrowDropDownLine size={30} className="drop-arrow" />
                )}
              </div>
            </div>
            {showCoursesDropdown && <DropdownMenu />}
          </li>
          <li>
            <NavLink to="/testSeries" className="navlink">
              Test Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/result" className="navlink">
              Result
            </NavLink>
          </li>
          <li>
            <NavLink to="/merchandise" className="navlink">
             Merchandise
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="navlink">
             Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              Contact Us
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
  );
};
export default Navbar;

const DropdownMenu = () => {
  return (
    <div className="courses-dropdown">
      <NavLink to="/courses/jee-online-courses" className="navlink">
        IIT Jee Online
      </NavLink>
      <NavLink to="/courses/jee-offline-courses" className="navlink">
        IIT Jee Offline
      </NavLink>
      <NavLink to="/courses/neet-online-courses" className="navlink">
        Neet UG Online
      </NavLink>
      <NavLink to="/courses/neet-offline-courses" className="navlink">
        Neet UG Offline
      </NavLink>
    </div>
  );
};
