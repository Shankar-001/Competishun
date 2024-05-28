import React from 'react';
import { subjects } from '../../Data/FreestudyMaterials';

const JeeAdvanced2024Solutions = () => {
  const beforeTableContent = "Candidates eagerly await the official JEE (Advanced) 2024 answer key to estimate their scores and assess their chances of admission to their dream colleges. To help alleviate some of this anticipation and provide clarity, COMPETISHUN offers an unofficial yet highly accurate answer key and solutions. Our experienced subject experts meticulously prepare these resources to ensure high accuracy. Candidates can access the unofficial JEE (Advanced) 2024 paper with answer key, solutions, video solutions and paper analysis. At COMPETISHUN, we are committed to delivering quality education and support, and our JEE (Advanced) answer key and solutions reflect this dedication.";
  const afterTableContent = "That's it! We hope these solutions help you in your preparation.";

  return (
    <div className="jee-container">
      <h2>JEE Advanced 2024 Question Paper with Solutions</h2>
      <p className='desc'>{beforeTableContent}</p>
      <table className="jee-table">
        <thead>
          <tr>
            <th></th>
            <th>Paper 1</th>
            <th>Paper 2</th>
            <th>Video Solution</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td><a href={subject.solutionsPaper1}  target='_blank'>Download PDF</a></td>
              <td>
                {subject.solutionsPaper2 === 'Coming soon' ? (
                  <a href={subject.paper2} target='_blank'>Download Now</a>
                ) : (
                  <a href={subject.solutionsPaper2} target='_blank'>Download PDF</a>
                )}
              </td>
              <td>Coming soon</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="instructions">
        <h2>How to Calculate Marks Using JEE Advanced 2024 Answer Key?</h2>
        <p>The JEE Advanced 2024 Answer Key enables students to make an educated guess about their potential scores. However, it's important to note that this estimated score may not precisely match the actual JEE Advanced result. To calculate the estimated score, follow below steps:</p>
        <ol>
          <li>Download the JEE Advanced 2024 Answer Key.</li>
          <li>Compare the answers you marked in the exam with the correct answers provided in the answer key.</li>
          <li>Determine the ratio of correct and incorrect responses.</li>
          <li>Add the allocated marks for correct answers, subtract the penalized marks for incorrect answers, and leave unattempted questions as they are.</li>
          <li>Calculate your JEE Advanced score based on the examination's marking scheme (mentioned below).</li>
        </ol>
      </div>
      <div className="marking-scheme">
        <h2>Marking Scheme for JEE Advanced Exam</h2>
         <h2>PAPER - 1</h2>
        <table className="jee-table">
          <thead>
            <tr>
              <th>Type of Questions</th>
              <th>No. Of Questions</th>
              <th>Positive Marking</th>
              <th>Negative Marking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SCQ</td>
              <td>4</td>
              <td>3</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>MCQ with Partial Marking</td>
              <td>3</td>
              <td>4</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>Integer (Non negative)</td>
              <td>6</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2 Paragraph (Numerical Value up to 2 Decimal Value)</td>
              <td>4</td>
              <td>3</td>
              <td>-1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="additional-table">
        <h2>JEE ADVANCED - 2024 PAPER PATTERN</h2>
        <h2>PAPER - 2</h2>
        <table className="jee-table">
          <thead>
            <tr>
              <th>Type of Questions</th>
              <th>No. Of Questions</th>
              <th>Positive Marking</th>
              <th>Negative Marking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SCQ</td>
              <td>4</td>
              <td>3</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>MCQ with Partial Marking</td>
              <td>3</td>
              <td>4</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>Integer (Non negative)</td>
              <td>6</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2 Paragraph (Numerical Value up to 2 Decimal Value)</td>
              <td>4</td>
              <td>3</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JeeAdvanced2024Solutions;
