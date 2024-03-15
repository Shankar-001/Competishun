import React, { useEffect, useRef, useState } from 'react';

const Highlight = () => {
  // write the code to change the text from array ["easy","scoring","fun"] every 2 seconds and it should look like it is being typed and then backspaced and then retyped with the new word.

  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const txt = ['easy', 'scoring', 'and more fun'];
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
      <div className="overlay">
        <div className="content">
          <h1>
            Math is <span>{txt[i].substring(0, j)}</span>
          </h1>
          <h1>
            When done with <span>Competishun</span>
          </h1>
          <p>
            Learn how to attack Math questions with India's one of the Best
            <br />
            Teachers #MathBoleTohMathonGo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
