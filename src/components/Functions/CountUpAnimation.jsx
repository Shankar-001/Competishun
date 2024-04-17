import React, { useEffect, useState } from 'react';
// import './App.css';
// import { FaUtensils, FaSmileBeam, FaList, FaStar } from 'react-icons/fa';

const CountUpAnimation = ({initialValue, targetValue, text }) => {
    const [count, setCount] = useState(initialValue);
    const duration = 2000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="container">
            {/* <div className="icon">{iconComponent}</div> */}
            <span className="num">{count}</span>
            <span className="text">{text}</span>
        </div>
    );
};

export default CountUpAnimation;
