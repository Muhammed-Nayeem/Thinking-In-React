import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "JavaScript",
      text: "JavaScript Is Awesome",
      library: "React.JS",
      isAwesome: true,
    };
  }

  changeHandler = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing Here...!");
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title);
    console.log(text);
    console.log(library);
    console.log(isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;

    return (
      <div className="form-app">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Something"
            value={title}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <textarea
            name="textarea"
            placeholder="Enter Something"
            value={text}
            onChange={this.changeHandler}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.changeHandler}>
            <option>Angular.JS</option>
            <option>React.JS</option>
            <option>Vue.JS</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
