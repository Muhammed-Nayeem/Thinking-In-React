import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("Ticking.....");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("Render in every update");
    document.title = `You've clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("Time Start....");
    setInterval(() => tick(), 1000);
  }, []);

  const increaseHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="effect-app">
      <h3>Time is: {date.toLocaleTimeString()}</h3>
      <button type="button" onClick={() => increaseHandler()}>
        Increase++
      </button>
    </div>
  );
};

export default Effect;
