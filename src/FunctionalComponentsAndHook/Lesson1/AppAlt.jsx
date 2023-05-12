import React from 'react';
import TodoClass from "./FunctionalComponentsAndHook/Lesson1/TodoClass";
import Todo from "./FunctionalComponentsAndHook/Lesson1/Todo";
import Todo2 from "./FunctionalComponentsAndHook/Lesson1/Todo2";
import Counter from "./FunctionalComponentsAndHook/Lesson1/Counter";

const AppAlt = () => {
  return (
    <div className="app">
      <TodoClass />
      <Todo />
      <Todo2 />
      <Counter />
    </div>
  );
};

export default AppAlt;
