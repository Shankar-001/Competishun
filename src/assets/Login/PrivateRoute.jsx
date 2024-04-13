import React, { useEffect, useState } from "react";
import styles from "./PrivateRoute.module.css";
import logo from "../../Assets/Logo 2.png";
import weekly from "../../Assets/Weekly.svg";
import side1 from "../../Assets/side1.svg";
import side2 from "../../Assets/side2.svg";
import side3 from "../../Assets/side3.svg";
import circleLine from "../../Assets/circleLine.png";
import search from "../../Assets/search-1.svg";
import ellipseUpDown from "../../Assets/ellips-up-down.svg";
import ellipseSmall from "../../Assets/Ellipse-small.svg";
import ellipseBiggest from "../../Assets/Ellipse-biggest.svg";
import arrow from "./arrow.svg";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogin,
  adminLoginSuccess,
  googleLogin,
  loginCheck,
} from "../../Redux/Admin/actionTypes";
import Loader from "../../Components/Loader/Loader";
import { Toast } from "../../Utils/swal";
import Model from "../../Components/Model/Model";
import InputField from "../../Components/InputText/InputField";
import Button from "../../Components/Button/Button";
import {
  createAppuser,
  readAdminByPhoneNumber,
  readAppUserByMobileNumber,
  sendOtpToNumber,
  updateAdmin,
} from "./actions";
import { readAdminById } from "../../Redux/Admin/actions";

const PrivateRoute = ({ children }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const [userDetail, setUserDetails] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  const {
    errorMessage,
    isError,
    isLoading,
    isLoggedIn,
    user,
    isPhoneNumberLinked,
  } = useSelector((state) => state.admin);

  const handleClick = async () => {
    setBtnDisable(true);
    sessionStorage.setItem("redirectUrl", window.location.pathname);
    sessionStorage.setItem("searchURl", window.location.search);
    dispatch(googleLogin(window.location.origin));
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      dispatch(adminLogin({ YOUR_REDIRECT_URL: window.location.origin, code }));
    }
  }, []);

  useEffect(() => {
    dispatch(loginCheck());
  }, [dispatch, location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isPhoneNumberLinked && isLoggedIn) {
    return (
      <Model
        title="Enter mobile number to verify login"
        children={<PhoneNumberAddition />}
        setShowModel={() => {
          sessionStorage.clear();
          window.location.reload();
        }}
      />
    );
  }

  if (isError && errorMessage) {
    Toast.fire({ icon: "error", title: errorMessage }).then(() => {
      window.location.href = window.location.origin;
    });
  }

  if (isLoggedIn && user && user._id) {
    if (sessionStorage.getItem("redirectUrl")) {
      const temp = sessionStorage.getItem("redirectUrl");
      const temp1 = sessionStorage.getItem("searchURl");
      sessionStorage.removeItem("redirectUrl");
      return <Navigate to={`${temp + temp1}`} />;
    } else {
      return children;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bodyContainer}>
      <img src={ellipseUpDown} alt="" className={styles.ellipseUpDown1}/>
        <img src={ellipseUpDown} alt="" className={styles.ellipseUpDown2}/>
        <img src={ellipseSmall} alt="" className={styles.ellipseSmall}/>
        <img src={ellipseBiggest} alt="" className={styles.ellipseBiggest}/>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.leftBox}>
            <div className={styles.headlines}>
              <div className={styles.heading1}>Master <div><p>Efficiency</p><img src={circleLine} alt="" /> </div>: Manage All Tasks </div>
              <p className={styles.heading2}>Seamlessly with Our Dashboard</p>
              <p className={styles.para}>Login Admin dashboard using google account.</p>
            </div>
            <button className={styles.signInButton} onClick={handleClick} disabled={btnDisable}>
              <img src={search} alt="" />
              <span>Sign in with Google</span>
            </button>
          </div>
          <div className={styles.rightbox}>
            <img src={weekly} alt="pic" className={styles.mainImg}/>
            <img src={side1} alt="pic" className={styles.side1}/>
            <img src={side2} alt="pic" className={styles.side2}/>
            <img src={side3} alt="pic" className={styles.side3}/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PrivateRoute;

const PhoneNumberAddition = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  let [searchParams, setSearchParams] = useSearchParams();
  const [userData, setuserdata] = useState({});
  const [isOtpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  async function sendOtp() {
    setLoading(true);
    const otpSentRes = await sendOtpToNumber({
      contact: phoneNumber,
      userName: userData.name,
    });
    if (!otpSentRes.error) {
      setOtpSent(otpSentRes.data.otp);
    }
    setLoading(false);
  }

  async function validateOtp() {
    setLoading(true);

    if (otp == isOtpSent) {
      const readdashboardAdminbyNumber = await readAdminByPhoneNumber(
        phoneNumber
      );
      if (readdashboardAdminbyNumber.data.length > 0) {
        Toast.fire({
          icon: "error",
          title: "Mobile already linked with other account",
        });
        setPhoneNumber("");
        setOtpSent(false);
        setOtp("");
        return;
      }
      const appUserRead = await readAppUserByMobileNumber(phoneNumber);
      if (appUserRead.data) {
        const adminUpdateRes = await updateAdmin({
          _id: userData._id,
          phoneNumber,
          appUserId: appUserRead.data._id,
        });
        if (!adminUpdateRes.error) {
          Toast.fire({ icon: "success", title: "Mobile updated successfully" });
          dispatch(adminLoginSuccess({ ...adminUpdateRes.data }));
        } else {
          Toast.fire({ icon: "error", title: "Something went Wrong" });
          window.location.reload();
        }
      } else {
        const appUserCreate = await createAppuser({
          phoneNumber,
          userName: userData.name,
          userType: "team"
        });
        const adminUpdateRes = await updateAdmin({
          _id: userData._id,
          phoneNumber,
          appUserId: appUserCreate.data._id,
        });
        if (!adminUpdateRes.error) {
          Toast.fire({ icon: "success", title: "Mobile updated successfully" });
          dispatch(adminLoginSuccess({ ...adminUpdateRes.data }));
        } else {
          Toast.fire({ icon: "error", title: "Something went Wrong" });
          window.location.reload();
        }
      }
    } else {
      Toast.fire({ icon: "error", title: "Wrong Otp" });
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const userRes = await readAdminById(user._id);
      setuserdata(userRes.data);
    })();
    setSearchParams({});
  }, []);

  return (
    <div>
      {!isOtpSent && (
        <>
          <InputField
            label="Mobile Number"
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setPhoneNumber(e.target.value);
              }
            }}
            placeholder="Enter Mobile Number"
            required={true}
            type="number"
            value={phoneNumber}
            autoFocus={true}
          />
          <Button
            disabled={phoneNumber.length < 10}
            label="Submit"
            style={{ width: "20%" }}
            onClick={sendOtp}
          />
        </>
      )}
      {isOtpSent && (
        <>
          <InputField
            label="Otp"
            onChange={(e) => {
              if (e.target.value.length <= 6) {
                setOtp(e.target.value);
              }
            }}
            placeholder="Enter OTP"
            required={true}
            type="number"
            value={otp}
            autoFocus={true}
          />
          <Button
            disabled={otp.length < 6}
            label="Submit"
            style={{ width: "20%" }}
            onClick={validateOtp}
          />
        </>
      )}
    </div>
  );
};
