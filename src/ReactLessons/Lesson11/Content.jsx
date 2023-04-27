import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../../contexts/ThemeContext";

const Content = () => {
  return (
    <div>
      <h3>This is Content Component!</h3>
      <Counter>
        {(counter, incrementCounter) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                counter={counter}
                incrementCounter={incrementCounter}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
};

export default Content;
