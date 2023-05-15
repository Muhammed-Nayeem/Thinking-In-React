import React, { useEffect, useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter Something" />
    </div>
  );
};

export default Form;
