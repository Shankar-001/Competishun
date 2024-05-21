/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  increment,
  setDoc,
} from 'firebase/firestore';
import db from '../../constants/Firebase';

const ContactComponent = () => {
  const [otherClass, setOtherClass] = useState('');
  const [otherStream, setOtherStream] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    city: '',
    state: '',
    class: '',
    message: '',
    email: '',
    stream: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    phone: '',
    class: '',
    email: '',
    message: '',
    stream: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
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

  const sendDataToAPI = async (data) => {
    const apiData = {
      FirstName: data.name,
      Email: data.email,
      MobileNumber: data.phoneNumber,
      AuthToken: 'COMPETISHUN-19-12-2023',
      Source: 'competishun',
      Course: 32, // You can modify this based on your actual course value
      LeadChannel: 8, // You can modify this based on your actual lead channel value
      LeadSource: 36, // You can modify this based on your actual lead source value
      leadCampaign: 2, // You can modify this based on your actual lead campaign value
    };

    console.log('apiData:', apiData);
    try {
      const response = await fetch(
        'https://thirdpartyapi.extraaedge.com/api/SaveRequest',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send data to API');
      }

      const responseData = await response.text();
      console.log('API Response:', responseData);
    } catch (error) {
      console.error('Error sending data to API:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isloading === false) {
      let hasErrors = false;
      const newErrors = {};

      // Validation for required fields
      if (formData.firstName.trim() === '') {
        newErrors.firstName = 'This field is required';
        hasErrors = true;
      }
      if (formData.phone.trim() === '') {
        newErrors.phone = 'This field is required';
        hasErrors = true;
      } else if (formData.phone.trim().length !== 10) {
        newErrors.phone = 'Phone number must be 10 digits long';
        hasErrors = true;
      }
      if (hasErrors) {
        setErrors(newErrors);
        setIsLoading(false);
        return;
      }

      try {
        // Get the current index value
        const indexDocRef = doc(db, 'index', 'SupportQueriesIndex');
        const indexDocSnap = await getDoc(indexDocRef);
        let currentIndex = 1; // Default value if index document doesn't exist

        if (indexDocSnap.exists()) {
          currentIndex = indexDocSnap.data().val;
        }

        // Prepare data to be added to the SupportQueries collection
        const data = {
          name: formData.firstName.trim(),
          phoneNumber: formData.phone,
          city: formData.city,
          state: formData.state,
          query: formData.message,
          class: formData.class === 'others' ? otherClass : formData.class,
          email: formData.email,
          stream: formData.stream === 'others' ? otherStream : formData.stream,
          date: Date.now(),
          index: currentIndex, // Set the index field
        };

        // Add document to the SupportQueries collection
        const docRef = await addDoc(collection(db, 'SupportQueries'), data);

        // Update the index for the next document
        await setDoc(indexDocRef, { val: increment(1) }, { merge: true });

        // Send data to the external API
        await sendDataToAPI(data);

        // Reset form data and errors
        setFormData({
          firstName: '',
          phone: '',
          city: '',
          state: '',
          class: '',
          email: '',
          message: '',
          stream: '',
        });

        setErrors({
          firstName: '',
          phone: '',
          class: '',
          email: '',
          message: '',
          stream: '',
        });

        // Show success message
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
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <div className="contact-form-container-width" id="contact_us">
      <div className="contact-form-container">
        <div className="contact-details-section">
          <p>Contact Our Team</p>
          <p className="contact-details-section-two">
            <p>
              {' '}
              Looking for support or counselling ? Fill out your details for
              personalized support !
            </p>
          </p>
          <div className="contact-details-section-margin">
            {/* <p className="contact-details-section-h2">
              You can also contact us at:
            </p> */}
            <p className="contact-detail-section-phone">
              <span className="phone-icon">
                <FaPhoneVolume />
              </span>
              <a href="tel:+918888000021" target="blank" className="text">
                +91 8888000021
              </a>
            </p>
            <p className="contact-detail-section-phone">
              <span className="mail-icon">
                <MdEmail />
              </span>
              <a
                href="mailto:support@competishun.com"
                target="blank"
                className="text"
              >
                support@competishun.com
              </a>
            </p>
            <p className="contact-detail-section-phone">
              <span className="whatsapp-icon">
                <IoLogoWhatsapp />
              </span>
              <a href="https://wa.link/xa00yu" target="blank" className="text">
                +91 7410900901
              </a>
            </p>
          </div>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.firstName && 'error'
                  }`}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                />
                <div className="error">{errors.firstName}</div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.phone && 'error'
                  }`}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                />
                <div className="error">{errors.phone}</div>
              </div>
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield`}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield`}
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield`}
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
            </div>

            <div>
              <p className="form-section-heading">
                In which class are you currently studying?
              </p>
              <select
                className={`form-section-select ${errors.class && 'error'}`}
                name="class"
                value={formData.class}
                onChange={handleChange}
              >
                <option value="">Select Class</option>
                <option value="Less than 9th">Class 10</option>
                <option value="10th">Class 11</option>
                <option value="11th">Class 12</option>
                <option value="12th">1st Time Dropper</option>
                <option value="Dropper">2nd Time Dropper</option>
                <option value="others">others</option>
              </select>
              <div className="error">{errors.class}</div>
              {formData.class === 'others' && (
                <div className="form-group">
                  <div className="form-group-input">
                    <input
                      className={`form-section-inputfield`}
                      type="text"
                      name="otherClass"
                      value={otherClass}
                      onChange={(e) => setOtherClass(e.target.value)}
                      placeholder="Please specify your class"
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="form-section-heading">For which stream you are ?</p>
              <select
                className={`form-section-select ${errors.stream && 'error'}`}
                name="stream"
                value={formData.stream}
                onChange={handleChange}
              >
                <option value="">Stream</option>
                <option value="Jee">JEE</option>
                <option value="Neet">NEET</option>
                <option value="others">Others</option>
              </select>
              <div className="error">{errors.stream}</div>
              {formData.stream === 'others' && (
                <div className="form-group">
                  <div className="form-group-input">
                    <input
                      className={`form-section-inputfield`}
                      type="text"
                      name="stream"
                      value={otherStream}
                      onChange={(e) => setOtherStream(e.target.value)}
                      placeholder="Please specify your Stream"
                    />
                  </div>
                </div>
              )}
            </div>

            <p className="form-section-heading">
              Leave any doubts in the message
            </p>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write here..."
                className={`form-section-textarea ${errors.message && 'error'}`}
              />
              <div className="error">{errors.message}</div>
            </div>

            <button
              type="submit"
              disabled={isloading}
              id="contactUsFormSubmitButton"
              className={`btn ${isloading && 'inactive'}`}
            >
              Submit
            </button>
            <div className="starmarks">
              {' '}
              <span>*</span> : indicates field is mandatory to be filled{' '}
            </div>
          </form>
        </div>

        <div className="contact-details-section-margin-2">
          <p className="contact-details-section-h2">
            You can also contact us at:
          </p>
          <p className="contact-detail-section-phone">
            <span className="phone-icon">
              <FaPhoneVolume />
            </span>
            <a href="tel:+918888000021" target="blank" className="text">
              +91 8888000021
            </a>
          </p>
          <p className="contact-detail-section-phone">
            <span className="mail-icon">
              <MdEmail />
            </span>
            <a
              href="mailto:support@competishun.com"
              target="blank"
              className="text"
            >
              support@competishun.com
            </a>
          </p>
          <p className="contact-detail-section-phone">
            <span className="whatsapp-icon">
              <IoLogoWhatsapp />
            </span>
            <a href="https://wa.link/xa00yu" target="blank" className="text">
              +91 7410900901
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
