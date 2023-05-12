import React, { useState } from "react";

const Todo2 = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;

  const onChangeHandler = (e) => {
    if (e.target.type === "text") {
      setTodo({
        ...todo,
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      setTodo({
        ...todo,
        description: e.target.value,
      });
    }
  };

  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        value={title}
        // onChange={(e) =>
        //   setTodo({
        //     ...todo,
        //     title: e.target.value,
        //   })
        // }
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter something...."
        value={description}
        // onChange={(e) =>
        //   setTodo({
        //     ...todo,
        //     description: e.target.value,
        //   })
        // }
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Todo2;
