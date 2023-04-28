import React from "react";

const HoverCounter = (props) => {
  const { counter, incrementCounter, theme, switchTheme } = props;
  const style = theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
  console.log("HoverCounter Rendered");
  
  return (
    <div>
      <h3 style={style} onMouseOver={incrementCounter}>
        Hovered {counter} Times
      </h3>
      <button type="button" onClick={switchTheme}>change theme</button>
    </div>
  );
};

export default HoverCounter;
