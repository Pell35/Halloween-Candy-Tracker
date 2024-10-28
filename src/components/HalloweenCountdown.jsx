import React, { useState, useEffect } from 'react';

function HalloweenCountdown({initialTime}){
    const [time, setTime] = useState(initialTime);
    
    useEffect(() =>{
        if(time > 0){
            const timer= setInterval(()=> {
                setTime((prevTime) => prevTime -1);
            }, 1000);
            return() => clearInterval(timer);
        }
    }, [time]);
    return(
        <div>
            <h2>Countdown: {time} seconds</h2>
            {time === 0 && <p> Time's up!</p>}
            </div>
    );

}
