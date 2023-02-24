import React, { useState, useEffect } from "react";

const Countdown = () => {
    const [timeRemaining, setTimeRemaining] = useState(3);

    useEffect(() => {
        const timer =
            timeRemaining > 0 && setInterval(() => setTimeRemaining(time => time - 1), 1000);
        return () => clearInterval(timer);
    }, [timeRemaining]);

    return (
        <div>
            {timeRemaining === 0 ? (
                <h1>Temps écoulé!</h1>
            ) : (
                <h1>Compte à rebours: {timeRemaining}</h1>
            )}
        </div>
    );
};

export default Countdown;
