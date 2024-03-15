import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="Navbar-main-container">
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
