import React from "react";
import Content from "./Content";

//functional component: example
// const Section = () => {
//   console.log("Section Rendered");

//   return (
//     <div>
//       <h3>This is Section Component!</h3>
//       <Content />
//     </div>
//   );
// };

//class component: 
class Section extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    console.log("Section Rendered");

    return (
      <div>
        <h3>This is Section Component!</h3>
        <Content />
      </div>
    );
  }
}

export default Section;
