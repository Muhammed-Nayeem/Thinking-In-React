import withCounter from "./HOC/withCounter";

function HoverCount(props) {
  const { counter, incrementCounter } = props;
  return (
    <div className="counter-app">
      <h3 onMouseOver={incrementCounter}>Hovered {counter} Times</h3>
    </div>
  );
}

export default withCounter(HoverCount);
