import React from "react";

class Bracket extends React.Component {
  addBracket = (text) => `[ ${text} ]`;

  render() {
    const { children } = this.props;

    return <div>{children({ addBracket: this.addBracket })}</div>;
  }
}

export default Bracket;
