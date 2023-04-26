function ClickCounter(props) {
  const { counter, incrementCounter } = props;

  return (
    <div className="count-app">
      <button type="button" onClick={incrementCounter}>
        Clicked {counter} Times
      </button>
    </div>
  );
}

export default ClickCounter;
