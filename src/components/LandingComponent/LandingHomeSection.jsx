import React, { useEffect, useRef, useState } from 'react';
import HighlightImg from '../../assets/SirImage.png';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, increment, setDoc } from 'firebase/firestore';
import db from '../../constants/Firebase';
import Swal from 'sweetalert2';

const LandingHomeSection = () => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const txt = ['केवल पढ़ाई', 'Selections'];
  const end = useRef(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: '',
  });

  function wait(seconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }

  const func = async () => {
    const m = txt.length;
    const n = txt[i].length;
    if (j === n) {
      end.current = true;
      await wait(2);
    } else {
      await wait(0.1);
    }
    if (i < m) {
      if (end.current === true && j >= 0) {
        if (j === 0) {
          await wait(1);
          end.current = false;
          if (i === m - 1) {
            seti(0);
          } else {
            seti((prev) => prev + 1);
          }
        } else {
          setj((prev) => prev - 1);
        }
      }
      if (end.current === false && j < n) {
        setj((prev) => prev + 1);
      }
    } else {
      seti(0);
      setj(0);
      end.current = false;
    }
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contact') {
      const phoneNumber = value.replace(/\D/g, '');
      if (phoneNumber.length > 10) {
        return;
      }
      setFormData((prevData) => ({ ...prevData, [name]: phoneNumber }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // const handleStartTrial = async (e) => {
  //   e.preventDefault();

  //   let hasErrors = false;
  //   const newErrors = {};

  //   if (formData.name.trim() === '') {
  //     newErrors.name = 'This field is required';
  //     hasErrors = true;
  //   }

  //   if (formData.contact.trim() === '') {
  //     newErrors.contact = 'This field is required';
  //     hasErrors = true;
  //   } else if (formData.contact.length !== 10) {
  //     newErrors.contact = 'Contact number must be exactly 10 digits';
  //     hasErrors = true;
  //   }

  //   if (hasErrors) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   const data = {
  //     name: formData.name.trim(),
  //     phoneNumber: formData.contact,
  //     date: Date.now(),
  //   };

  //   const docRef = await addDoc(collection(db, 'FreeTrialStudent'), data);

  //   console.log('Submitted Data:', formData);

  //   setFormData({
  //     name: '',
  //     contact: '',
  //   });

  //   navigate('/');
  // };
  const handleStartTrial = async (e) => {
    e.preventDefault();
  
    let hasErrors = false;
    const newErrors = {};
  
    if (formData.name.trim() === '') {
      newErrors.name = 'This field is required';
      hasErrors = true;
    }
  
    if (formData.contact.trim() === '') {
      newErrors.contact = 'This field is required';
      hasErrors = true;
    } else if (formData.contact.length !== 10) {
      newErrors.contact = 'Contact number must be exactly 10 digits';
      hasErrors = true;
    }
  
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
  
    // const db = getFirestore(); // Assuming db is your Firestore instance
  
    try {
      // Get the current index value
      const indexDocRef = doc(db, 'index', 'FreeTrialStudentIndex');
      const indexDocSnap = await getDoc(indexDocRef);
      let currentIndex = 1; // Default value if index document doesn't exist
  
      if (indexDocSnap.exists()) {
        currentIndex = indexDocSnap.data().val;
      }
  
      // Prepare data to be added to the FreeTrialStudent collection
      const data = {
        name: formData.name.trim(),
        phoneNumber: formData.contact,
        email: formData.email,
        date: Date.now(),
        index: currentIndex, // Set the index field
      };
  
      // Add document to the FreeTrialStudent collection
      const docRef = await addDoc(collection(db, 'FreeTrialStudent'), data);
  
      // Update the index for the next document
      await setDoc(indexDocRef, { val: increment(1) }, { merge: true });
  
      // console.log('Submitted Data:', formData);
      Swal.fire({
        title: 'Thanks for sharing your details!',
        html: "<div id='custom-text'>Our team member will reach out to you soon.</div>",
        icon: 'success',
        customClass: {
          title: 'your-custom-title-class',
          popup: 'your-custom-popup-class',
          htmlContainer: 'your-custom-html-container-class',
          confirmButton: 'your-custom-confirm-button-class',
        },
      });
  
      // Reset form data and errors
      setFormData({
        name: '',
        contact: '',
        email: '',
      });
  
      // Redirect or navigate to a different page
      // navigate('/');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
    func();
  }, [i, j]);

  return (
    <section className="landing-highlight">
      <div className="landing-info-container">
        <div className="landing-info-subcontainer">
          <div className="landing-info">
            <h1>
              Competishun Means{' '}
              <span className="landing-animation-full-screen">
                {txt[i].substring(0, j)}
              </span>
            </h1>
            <h1>
              <span className="landing-animation-media-screen">
                {txt[i].substring(0, j)}
              </span>
            </h1>
            <p>
              {/* Learn how to attack JEE questions with India's one of the Best Teachers #Competishun */}
              One of the most Trusted Institute for IIT JEE and NEET preparation
            </p>
          </div>
          {/* <div className="landing-img">
            <img src={HighlightImg} alt="" />
          </div> */}
        </div>
      </div>

      <div className="landing-home-contact-field">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${errors.name && 'error'}`}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Mobile Number"
            value={formData.contact}
            onChange={handleInputChange}
            className={`${errors.contact && 'error'}`}
          />
           <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${errors.email && 'error'}`}
          />
        </form>
      </div>

      <button className="btn" onClick={handleStartTrial}>
        Submit Now
      </button>
    </section>
  );
};

export default LandingHomeSection;

