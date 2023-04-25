import React from "react";

class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    const { children } = this.props;
    return <div>{children({ addEmoji: this.addEmoji })}</div>;
  }
}

export default Emoji;
