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
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;

    // let button;
    // if (locale === "bn-BD") {
    //   button = <Button change={this.changeHandler} locale="en-US"></Button>;
    // } else {
    //   button = <Button change={this.changeHandler} locale="bn-BD"></Button>;
    // }

    return (
      <div className="clock-app">
        <h3 className="time-heading">{date.toLocaleTimeString(locale)}</h3>
        {locale === "bn-BD" ? (
          <Button change={this.changeHandler} locale="en-US" show={false} enable={false}></Button>
        ) : (
          <Button change={this.changeHandler} locale="bn-BD" show={true} enable={true}></Button>
        )}
      </div>
    );
  }
}

export default Clock;
