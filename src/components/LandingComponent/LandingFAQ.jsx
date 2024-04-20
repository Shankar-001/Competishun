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
            text="How can recipients validate their certificates?"
            content="Recipients can instantly verify their digital certificate by scanning the unique QR code on their digital certificate."
          />
          <FaqContent
            text="Who sends the digital certificate?"
            content="MoneyyApp will email the digital certificate to the respective certificate holder. The organisation can customise email templates."
          />
          <FaqContent
            text="What is digital certificate lifecycle management?"
            content="Digital certificate lifecycle management refers to managing the entire lifespan of digital certificates, from issuance to expiration. It involves various activities and controls to ensure the proper use, renewal, revocation, and management of certificates within an organisation or system."
          />
          <FaqContent
            text="What happens to the certificates or our account if we don’t continue our subscription?"
            content="Issued digital credentials remain active (as long as you have not put an expiration date on them). For cancellations part way through a year, please refer to our Cancellation and Refund policy."
          />
          <FaqContent
            text="Can I issue digital certificates in bulk?"
            content="Yes. Make sure your data is available in spreadsheet format and upload it to our system. The spreadsheet upload creation method can handle 100,000 records with a single spreadsheet in one upload. You can queue five different uploads at a time, and those uploads can be for different departments, and apply to multiple groups. With file uploads, MoneyyApp works in the background so you don't need to stay on the upload page, and provides insightful tooltips and downloadable logs once uploads are complete."
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
