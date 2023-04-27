import React from "react";

const ClickCounter = (props) => {
  const { counter, incrementCounter } = props;

  return (
    <div>
      <button type="button" onClick={incrementCounter}>
        Clicked {counter} Times
      </button>
    </div>
  );
};

export default ClickCounter;
