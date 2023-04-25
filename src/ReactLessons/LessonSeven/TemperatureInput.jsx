const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  const { temperature, scale, onTemperatureChange } = props;

  return (
    <div className="input-group">
      <fieldset>
        <legend>Enter the temperature in {scaleNames[scale]}:</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
          placeholder="Temperature in celsius...."
        />
      </fieldset>
    </div>
  );
}

export default TemperatureInput;
