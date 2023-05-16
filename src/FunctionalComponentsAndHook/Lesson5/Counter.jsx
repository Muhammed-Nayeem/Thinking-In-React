import React, { useReducer } from "react";

const btnStyle = {
  marginLeft: "20px",
};

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const Counter = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-app">
      <p>Counter - {currentState}</p>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button
        type="button"
        style={btnStyle}
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
