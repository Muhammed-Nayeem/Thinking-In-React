import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef(null);

  const ticking = () => {
    setTime(new Date());
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => ticking(), 1000);

    //do the cleanup - do timer stop:
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p>Time is: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={() => clearInterval(intervalRef.current)}>
        clean up
      </button>
    </div>
  );
};

export default Time;
