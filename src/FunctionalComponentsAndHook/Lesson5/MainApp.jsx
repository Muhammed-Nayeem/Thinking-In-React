import React, { useReducer } from 'react';
import ComponentA from './ComponentA';

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const MainApp = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='main-app'>
      <p>Counter - {currentState}</p>
      <CounterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
};

export default MainApp;
