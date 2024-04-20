import React, { useState } from 'react';
import Plus from '../../assets/PlusCircle.svg';
import Minus from '../../assets/MinusCircle.svg';

const LandingFAQ = () => {
  return (
    <div className="certificateFaq">
      <div className="faqContainer">
        <div className="faqContent">Frequently Asked Questions</div>
        <div className="faqContent1">
          <FaqContent
            text="What are the Features of Online Courses of Competishun ?"
            content="We have the most extensive online courses for JEE Main, Advanced, NEET which includes Recorded Scheduled Lectures by the best Faculties, Graded Study Material - Sheets and DPPs with their Text and Video Solutions, Fast Doubt Clearing Via Telegram Group and Zoom Live Doubt Counter and Excellent Tests and Analysis for JEE Main, Advanced and NEET pattern."
          />
          <FaqContent
            text="Who are the teacher at competishun?"
            content="Lectures are Recorded by India's Best and Experienced Faculties such as Mohit Tyagi Sir (Maths), Alok Kumar Sir (Chemistry Physical Inorganic), Amit Bijarnia Sir (Physics) and Neeraj Saini Sir (Chemistry Organic). Lectures and Study Material is graded material and is provided as per revised JEE MAIN Syllabus."
          />
          <FaqContent
            text="Is scholarship available?"
            content="Yes, Scholarship is available for Offline Admission based on Scholarship Test. Scholarship can be achieved from 10% To 90% based on scholarship test performances."
          />
          <FaqContent
            text="Class will be live or schedule?"
            content="Online Classes at Competishun will be RECORDED SCHEDULED Class which will be scheduled as per Weekly Time Table At specific Date and Time. Students are provided with Time Table every week."
          />
          <FaqContent
            text="Is Competishun Online or Offline?"
            content="Both. Competishun has its offline study center in Jaipur. Address: Bus Stand, K-14, Scheme No 5, near Durgapura, Income Tax Colony, Durgapura, Jaipur, Rajasthan, 302018. If you are interested in our online courses, you can visit our website."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingFAQ;

const FaqContent = ({ text, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faqSubContent">
      <div onClick={toggleContent}>
        <h2>{text}</h2>
        <img src={isExpanded ? Minus : Plus} alt="Toggle Icon" />
      </div>
      {isExpanded && <p>{content}</p>}
    </div>
  );
};
