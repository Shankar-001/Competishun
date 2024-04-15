import React from 'react';
import ellipseUpDown from '../../assets/Login/ellips-up-down.svg';
import ellipseSmall from '../../assets/Login/Ellipse-small.svg';
import ellipseBiggest from '../../assets/Login/Ellipse-biggest.svg';
import search from '../../assets/Login/search-1.svg';
import logo from '../../assets/logo.png';
import circleLine from '../../assets/Login/circleLine.png';
import weekly from '../../assets/Login/Weekly.svg';
import side1 from '../../assets/Login/side1.svg';
import side2 from '../../assets/Login/side2.svg';
import side3 from '../../assets/Login/side3.svg';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import useUser from '../../context/userContext.js';
 const LoginComponent = () => {
  const { user, setUser } = useUser();

  const handleClick = async () => {
    try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider);
            console.log('logged in successfully');
        } catch (error) {
            console.log('Google authentication failed!')
            console.log(error)
        }
  };
  return (
    <div className="login-main-Container">
    <div className="mainContainer">
      <div className="bodyContainer">
        <img src={ellipseUpDown} alt="" className="ellipseUpDown1" />
        <img src={ellipseUpDown} alt="" className="ellipseUpDown2" />
        <img src={ellipseSmall} alt="" className="ellipseSmall" />
        <img src={ellipseBiggest} alt="" className="ellipseBiggest" />
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="centerContainer">
          <div className="leftBox">
            <div className="headlines">
              <div className="heading1">
                Master{' '}
                <div>
                  <p>Efficiency</p>
                  <img src={circleLine} alt="" />{' '}
                </div>
                : Manage All Tasks{' '}
              </div>
              <p className="heading2">Seamlessly with Our Dashboard</p>
              <p className="para">
                Login Admin dashboard using google account.
              </p>
            </div>
            <button
              className="signInButton"
              onClick={handleClick}
            //   disabled={btnDisable}
            >
              <img src={search} alt="" />
              <span>Sign in with Google</span>
            </button>
          </div>
          <div className="rightbox">
            <img src={weekly} alt="pic" className="mainImg" />
            <img src={side1} alt="pic" className="side1" />
            <img src={side2} alt="pic" className="side2" />
            <img src={side3} alt="pic" className="side3" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default LoginComponent;