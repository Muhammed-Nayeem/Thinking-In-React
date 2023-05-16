import React, { useContext } from "react";
import { CounterContext } from "./MainApp";

const ComponentB = () => {
  const countContext = useContext(CounterContext);
  const { countDispatch } = countContext;

  return (
    <div>
      <button type="button" onClick={() => countDispatch("increment")}>
        Increment By 1
      </button>
      <button type="button" onClick={() => countDispatch("decrement")}>
        Decrement By 1
      </button>
    </div>
  );
};

// const ComponentB = () => {
//   return (
//     <div>
//       <CounterContext.Consumer>
//         {({ countDispatch }) => (
//           <button type="button" onClick={() => countDispatch("increment")}>
//             Increment By 1
//           </button>
//         )}
//       </CounterContext.Consumer>
//       <CounterContext.Consumer>
//         {({ countDispatch }) => (
//           <button type="button" onClick={() => countDispatch("decrement")}>
//             Decrement By 1
//           </button>
//         )}
//       </CounterContext.Consumer>
//     </div>
//   );
// };

export default ComponentB;
