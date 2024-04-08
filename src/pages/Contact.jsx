/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    city: '',
    state: '',
    class: '',
    message: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    phone: '',
    class: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const data = {
      name: formData.firstName.trim(),
      phoneNumber: formData.phone,
      city: formData.city,
      state: formData.state,
      query: formData.message,
      class: formData.class,
      email: formData.email,
    };

    console.log('data', data);
    setFormData({
      firstName: '',
      phone: '',
      city: '',
      state: '',
      class: '',
      email: '',
      message: '',
    });

    setErrors({
      firstName: '',
      phone: '',
      class: '',
      email: '',
      message: '',
    });

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
  };

  return (
    <div className="contact-form-container-width" id="contact_us">
      <div className="contact-form-container">
        <div className="contact-details-section">
          <p>Contact Our Team</p>
          <p className="contact-details-section-two">
            For more pricing details, Contact Our Contact team.
          </p>
          <div className="contact-details-section-margin">
            <p className="contact-details-section-h2">
              You can also contact us at:
            </p>
            <p className="contact-detail-section-phone">
              <span>+91 8888000021</span>
            </p>
            <p className="contact-detail-section-phone">
              <span>support@competishun.com</span>
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
                  placeholder="First Name"
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
                  placeholder="Phone Number"
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
              </select>
              <div className="error">{errors.class}</div>
            </div>
            <div>
              <p className="form-section-heading">
               For which stream you are ? 
              </p>
              <select
                className={`form-section-select ${errors.class && 'error'}`}
                name="class"
                value={formData.class}
                onChange={handleChange}
              >
                <option value="">Stream</option>
                <option value="Jee">JEE</option>
                <option value="Neet">NEET</option>
                <option value="Others">Others</option>
              </select>
              <div className="error">{errors.class}</div>
            </div>


            <h3 className="form-section-heading">
              Leave any doubts in the message
            </h3>
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

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-details-section-margin-2">
          <p className="contact-details-section-h2">
            You can also contact us at:
          </p>
          <p className="contact-detail-section-phone">
            <a>
              <span>+91 8888000021 </span>
            </a>
          </p>
          <p className="contact-detail-section-phone">
            <a>
              <span>support@competishun.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
