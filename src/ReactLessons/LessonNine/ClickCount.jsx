import withCounter from "./HOC/withCounter";

function ClickCount(props) {
  const { counter, incrementCounter } = props;
  return (
    <div className="counter-app">
      <button type="button" onClick={incrementCounter}>
        Clicked {counter} Times
      </button>
    </div>
  );
}

export default withCounter(ClickCount);
