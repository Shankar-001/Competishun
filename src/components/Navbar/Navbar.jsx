import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FaBars, FaHamburger } from 'react-icons/fa';
import { FaCross, FaX } from 'react-icons/fa6';

const Navbar = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(true);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollToTop(scrollY === 0);
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

  const handleCoursesMenuToggle = () => {
    setShowCoursesDropdown(!showCoursesDropdown);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
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
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {showMobileMenu ? <FaX /> : <FaBars />}
        </div>
        <div className={`navbar-heading ${!showMobileMenu && 'inactive'}`}>
          <li>
            <NavLink to="/" className="navlink" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={handleCoursesMouseEnter}
            onMouseLeave={handleCoursesMouseLeave}
            onClick={handleCoursesMenuToggle}
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
            <NavLink
              to="/testSeries"
              className="navlink"
              onClick={closeMobileMenu}
            >
              Test Series
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/merchandise"
              className="navlink"
              onClick={closeMobileMenu}
            >
              Merchandise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studyfree"
              className="navlink"
              onClick={closeMobileMenu}
            >
              Study Free
            </NavLink>
          </li>
          <li>
            <NavLink to="/result" className="navlink" onClick={closeMobileMenu}>
              Result
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="navlink"
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navlink"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
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
