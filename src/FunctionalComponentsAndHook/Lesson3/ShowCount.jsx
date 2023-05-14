import React from "react";

const ShowCount = (props) => {
  const { counter, title } = props;
  console.log(`${title} is rendering!`);

  return (
    <div className="counter-app">
      <h3>
        {title} - {counter}
      </h3>
    </div>
  );
};

export default React.memo(ShowCount);
