function Text(props) {
  const { addEmoji, addBracket } = props;
  let text = "I am JavaScript Programming Language";

  if (addEmoji) {
    text = addEmoji(text, "💜");
  }
  if (addBracket) {
    text = addBracket(text);
  }

  return <div>{text}</div>;
}

export default Text;
