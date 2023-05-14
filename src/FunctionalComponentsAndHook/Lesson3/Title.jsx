import React from "react";

const Title = () => {
  console.log("Title Rendering...!");

  return (
    <div className="title">
      <h3>useCallback & useMemo Hook Tutorial!</h3>
    </div>
  );
};

export default React.memo(Title);
