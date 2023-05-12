import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const todoHandler = (e) => {
    const updatedTodo = e.target.value;
    const updatedWarning = updatedTodo.includes(".js")
      ? "You need to have JavaScript skill to complete the task. Do you have it?"
      : null;

    setTodo(updatedTodo);
    setWarning(updatedWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <textarea
        placeholder="Enter something...."
        value={todo}
        onChange={todoHandler}
      />
      <br />
      <hr />
      <h3>{warning || "Good Choice!"}</h3>
    </div>
  );
};

export default Todo;
