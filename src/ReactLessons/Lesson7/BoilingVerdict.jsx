function BoilingVerdict(props) {
  const { temp, scale } = props;
  if (scale === "c") {
    if (temp >= 100) {
      return <p>The water would boil.</p>;
    } else {
      return <p>The water would not boil.</p>;
    }
  } else if (scale === "f") {
    if (temp >= 212) {
      return <p>The water would boil.</p>;
    } else {
      return <p>The water would not boil.</p>;
    }
  }
}

export default BoilingVerdict;
