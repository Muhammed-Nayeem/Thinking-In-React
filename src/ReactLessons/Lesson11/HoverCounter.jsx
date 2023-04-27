import React from "react";

const HoverCounter = (props) => {
  const { counter, incrementCounter, theme } = props;
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;

  return (
    <div>
      <h3 style={style} onMouseOver={incrementCounter}>
        Hovered {counter} Times
      </h3>
    </div>
  );
};

export default HoverCounter;
