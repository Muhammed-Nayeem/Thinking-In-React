import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { converter, toCelsius, toFahrenheit } from "../../library/converter";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === "f" ? converter(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? converter(temperature, toFahrenheit) : temperature;

    return (
      <div className="calculator-app">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
        ></TemperatureInput>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
        ></TemperatureInput>
        <BoilingVerdict temp={parseFloat(temperature)} scale={scale}></BoilingVerdict>
      </div>
    );
  }
}

export default Calculator;
