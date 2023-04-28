import "./App.css";
import React from "react";
import Counter from "./ReactLessons/Lesson11/Counter";
import ClickCounter from "./ReactLessons/Lesson11/ClickCounter";
import Section from "./ReactLessons/Lesson11/Section";
import ThemeContext from "./contexts/ThemeContext";

// function AppAlt() {
//   return (
//     <div className="app">
//       <Counter>
//         {(counter, incrementCounter) => (
//           <ClickCounter counter={counter} incrementCounter={incrementCounter} />
//         )}
//       </Counter>
//       <Section />
//     </div>
//   );
// }

class AppAlt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      switchTheme: () => {
        this.setState(({ theme }) => {
          if (theme === "dark") {
            return {
              theme: "light",
            };
          } else {
            return {
              theme: "dark",
            };
          }
        });
      },
    };
  }

  //Keep this as method:
  // switchTheme = () => {
  //   this.setState(({ theme }) => {
  //     if (theme === "dark") {
  //       return {
  //         theme: "light",
  //       };
  //     } else {
  //       return {
  //         theme: "dark",
  //       };
  //     }
  //   });
  // };

  render() {
    // const { theme, switchTheme } = this.state;
    return (
      <div className="app">
        <Counter>
          {(counter, incrementCounter) => (
            <ClickCounter
              counter={counter}
              incrementCounter={incrementCounter}
            />
          )}
        </Counter>

        {/* <ThemeContext.Provider value={{ theme: theme, switchTheme: switchTheme }}>
          <Section />
        </ThemeContext.Provider> */}

        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default AppAlt;
