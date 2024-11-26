import React, { useState, useEffect } from "react";

const Timer = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isStarted, setIsStarted] = useState(false);
 
    useEffect(() => {

        if (isStarted){
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000)
            
            // Clean up the timer
            return () => clearInterval(timer);
        }}, [seconds, isStarted]);
        


    // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const startTimer = () => {
        
    }

    return (
        <div>
            <button onClick={() => setIsStarted(true)} >Start!</button>
        </div>
    );
};

export default Timer;