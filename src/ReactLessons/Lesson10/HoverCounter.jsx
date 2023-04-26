function HoverCounter(props) {
  const { counter, incrementCounter } = props;

  return (
    <div className="count-app">
      <h3 onMouseOver={incrementCounter}>Hovered {counter} Times</h3>
    </div>
  );
}

export default HoverCounter;
