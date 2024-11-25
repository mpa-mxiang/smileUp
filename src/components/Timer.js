import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      // Cleanup function to clear the interval
      return () => clearInterval(timer);
    }

    // Explicitly return undefined when no cleanup is needed
    return undefined;
  }, [isStarted]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const startTimer = () => {
    setIsStarted(true);
  };

  const stopTimer = () => {
    setIsStarted(false);
  };

  const resetTimer = () => {
    setIsStarted(false);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <h1>
        Timer:
        {formatTime(seconds)}
      </h1>
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={stopTimer}>Stop</button>
      <button type="button" onClick={resetTimer}>Reset</button>
    </div>
  );
};

Timer.propTypes = {
  initialSeconds: PropTypes.number.isRequired,
};

export default Timer;
