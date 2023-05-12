import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase1 = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let i = 0;
  const increase5 = () => {
    while (i < 5) {
      setCount2((prevCount) => prevCount + 1);
      i += 1;
    }
  };

  return (
    <div>
      <h3>Count - {count}</h3>
      <button type="button" onClick={() => increase1()}>
        increase 1
      </button>
      <br />
      <br />
      <h3>Count2 - {count2}</h3>
      <button type="button" onClick={() => increase5()}>
        increase 5
      </button>
    </div>
  );
};

export default Counter;
