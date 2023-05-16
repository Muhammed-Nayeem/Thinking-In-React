import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div>
      <h3>This is Component A.</h3>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
