import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

//Example: 01
// const Content = () => {
//   return (
//     <div>
//       <h3>This is Content Component!</h3>
//       <Counter>
//         {(counter, incrementCounter) => (
//           <ThemeContext.Consumer>
//             {({ theme, switchTheme }) => (
//               <HoverCounter
//                 counter={counter}
//                 incrementCounter={incrementCounter}
//                 theme={theme}
//                 switchTheme={switchTheme}
//               />
//             )}
//           </ThemeContext.Consumer>
//         )}
//       </Counter>
//     </div>
//   );
// };

//Example: 03
const Content = () => {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;

  console.log("Content Rendered");
  return (
    <div>
      <h3>This is Content Component!</h3>
      <Counter>
        {(counter, incrementCounter) => (
          <HoverCounter
            counter={counter}
            incrementCounter={incrementCounter}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
};

//Example: 02
// class Content extends React.Component {
//   componentDidMount() {
//     console.log(this.context);
//   }

//   render() {
//     const { theme, switchTheme } = this.context;

//     return (
//       <div>
//         <h3>This is Content Component!</h3>
//         <Counter>
//           {(counter, incrementCounter) => (
//             <HoverCounter
//               counter={counter}
//               incrementCounter={incrementCounter}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// Content.contextType = ThemeContext;

export default Content;
