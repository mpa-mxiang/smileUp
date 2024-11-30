import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ initialSeconds, isStarted, setIsStarted }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (isStarted) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      // Clean up the timer
      return () => clearInterval(timer);
    }
    return undefined; // Explicitly return undefined
  }, [isStarted]);

  return (
    <div>
      <p>
        Time elapsed:
        {seconds}
        {' '}
        seconds
      </p>
      <button type="button" onClick={() => setIsStarted(true)}>Start!</button>
    </div>
  );
};

// Add prop-types validation
Timer.propTypes = {
  initialSeconds: PropTypes.number.isRequired,
  isStarted: PropTypes.bool.isRequired,
  setIsStarted: PropTypes.func.isRequired,
};

export default Timer;
