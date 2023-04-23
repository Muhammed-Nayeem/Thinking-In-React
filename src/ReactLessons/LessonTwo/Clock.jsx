import React from "react";

//class component:
class Clock extends React.Component {
  render() {
    const { locale } = this.props;
    return (
      <div className="clock">
        <h3 className="time-heading">
          Time is: {new Date().toLocaleTimeString(locale)}
        </h3>
      </div>
    );
  }
}

//functional component:
// function Clock(props) {
//   const {locale} = props;

//   return (
//     <div className="clock">
//       <h3 className="time-heading">
//         Time is: {new Date().toLocaleTimeString(locale)}
//       </h3>
//     </div>
//   );
// }

export default Clock;
