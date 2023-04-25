import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
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
      return (
        <OriginalComponent
          counter={counter}
          incrementCounter={this.incrementCounter}
        ></OriginalComponent>
      );
    }
  }
  return NewComponent;
};

export default withCounter;
