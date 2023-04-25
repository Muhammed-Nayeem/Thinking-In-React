import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "bn-BD",
    };
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  changeHandler = (locale) => {
    this.setState({
      locale,
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;
    console.log("Clock Component Render!");

    return (
      <div className="clock-app">
        <h3 className="time-heading">{date.toLocaleTimeString(locale)}</h3>
        <Button change={this.changeHandler} locale="en-US"></Button>
      </div>
    );
  }
}

export default Clock;
