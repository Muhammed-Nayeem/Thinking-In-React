import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    const { children } = this.props;

    return children(counter, this.incrementCounter);
  }
}

export default Counter;
