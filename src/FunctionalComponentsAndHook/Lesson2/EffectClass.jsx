import React from "react";

class EffectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
    setInterval(() => this.ticking(), 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
  }

  ticking = () => {
    this.setState({
      date: new Date(),
    });
  };

  increaseHandler = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { date } = this.state;
    return (
      <div className="effect-app">
        <h3>Time is: {date.toLocaleTimeString()}</h3>
        <button type="button" onClick={this.increaseHandler}>
          Increase++
        </button>
      </div>
    );
  }
}

export default EffectClass;
