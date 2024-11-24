import React, { useState, useEffect } from "react";

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {

    if (isStarted) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000)

      // Clean up the timer
      return () => clearInterval(timer);
    }
  }, [seconds, isStarted]);


  return (
    <div>
      <button onClick={() => setIsStarted(true)}
        className="left-full mt-4 px-4 py-2 text-black rounded">Start!</button>
    </div>
  );
};

export default Timer;