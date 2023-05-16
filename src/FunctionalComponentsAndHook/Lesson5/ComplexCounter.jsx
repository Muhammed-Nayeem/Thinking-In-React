import React, { useReducer } from "react";

const btnStyle = {
  marginLeft: "20px",
};

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };

    case "decrement":
      return { ...state, counter: state.counter - action.value };

    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };

    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const { counter, counter2 } = currentState;

  return (
    <div className="counter-app">
      <div className="counter-1">
        <p>Counter - {counter}</p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment By 1
        </button>
        <button
          type="button"
          style={btnStyle}
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement By 1
        </button>
      </div>
      <div className="counter-2">
        <p>Counter2 - {counter2}</p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 1,
            })
          }
        >
          Increment2 By 1
        </button>
        <button
          type="button"
          style={btnStyle}
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 1,
            })
          }
        >
          Decrement2 By 1
        </button>
      </div>
    </div>
  );
};

export default ComplexCounter;
