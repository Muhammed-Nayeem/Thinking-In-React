import React from "react";

class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      warning: null,
    };
  }

  todoHandler = (e) => {
    const updatedTodo = e.target.value;
    const updatedWarning = updatedTodo.includes(".js")
      ? "You need to have JavaScript skills to complete the task. Do you have it?"
      : null;

    this.setState({
      todo: updatedTodo,
      warning: updatedWarning,
    });
  };

  render() {
    const { todo, warning } = this.state;

    return (
      <div>
        <p>{todo}</p>
        <textarea
          type="textarea"
          placeholder="Enter Something...."
          value={todo}
          onChange={this.todoHandler}
        />
        <br />
        <hr />
        <h3>{warning || "Good Choice!"}</h3>
      </div>
    );
  }
}

export default TodoClass;
