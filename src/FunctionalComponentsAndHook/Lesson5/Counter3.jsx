import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 5;

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

const Counter3 = () => {
  const [currentState1, dispatch1] = useReducer(reducer, initialState);
  const [currentState2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <div className="counter-app">
      <div className="counter-1">
        <p>Counter1 - {currentState1}</p>
        <button type="button" onClick={() => dispatch1("increment")}>
          Increment By 1
        </button>
        <button type="button" onClick={() => dispatch1("decrement")}>
          Decrement By 1
        </button>
      </div>
      <div className="counter-2">
        <p>Counter2 - {currentState2}</p>
        <button type="button" onClick={() => dispatch2("increment")}>
          Increment By 1
        </button>
        <button type="button" onClick={() => dispatch2("decrement")}>
          Decrement By 1
        </button>
      </div>
    </div>
  );
};

export default Counter3;
