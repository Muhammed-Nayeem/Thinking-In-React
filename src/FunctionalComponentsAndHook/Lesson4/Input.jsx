import React from 'react';

const Input = ({type, placeholder}, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
