import React, { useEffect, useRef, useState } from 'react';
import highlightVideo from "../../assets/highlight-background.mp4"

const HighlightSection = () => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const txt = ['केवल पढ़ाई', 'Selections'];
  const end = useRef(false);

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
  useEffect(() => {
    func();
  }, [i, j]);
  return (
    <div className="highlight">
      <video autoPlay loop muted>
        <source src={highlightVideo} type="video/mp4" />
        {/* <source
          // src="https://firebasestorage.googleapis.com/v0/b/competishun-a1193.appspot.com/o/assets%2Fhighlight-background.mp4?alt=media&token=4f21f9c2-70d2-43d4-9e03-d7ba9d11f1ee"
          src="https://utfs.io/f/71f1eb16-5e48-4aef-acd0-dbb7773a3a0b-w2wmhz.mp4"
          type="video/mp4"
        /> */}
        {/* Your browser does not support the video tag. */}
      </video>
      <div className="overlay">
        <div className="content">
          <h1>
            {/* Competishun Means <span>केवल पढाई</span> */}
            Competishun Means <span>{txt[i].substring(0, j)}</span>
          </h1>
          <h1>{/* Competishun Means <span>Selection</span> */}</h1>
          <p>
          One of the most Trusted Institute for IIT JEE and NEET preparation
          </p>
          <button className="btn">Explore our courses</button>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
