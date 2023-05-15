import React, { useEffect, useRef } from 'react';
import Input from './Input';

const Form2 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} type="text" placeholder="Enter Something" />
    </div>
  );
};

export default Form2;
