import React from "react";

const Button = ({ eventHandler, children }) => {
  console.log(`Rendering ${children}`);

  return (
    <div className="btn">
      <button type="button" onClick={() => eventHandler()}>
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
