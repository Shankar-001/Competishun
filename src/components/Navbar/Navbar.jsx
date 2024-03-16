import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(true);
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
          <li>
            <NavLink to="/courses" className="navlink">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/testSeries" className="navlink">
              Test Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/result" className="navlink">
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
  );
};
export default Navbar;
