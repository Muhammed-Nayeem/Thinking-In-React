import Clock from "./Clock";

function ClockList(props) {
  const { quantities } = props;

  return (
    <div className="clock-list">
      {quantities.map((clock) => (
        <Clock key={clock}></Clock>
      ))}
    </div>
  );
}

export default ClockList;
