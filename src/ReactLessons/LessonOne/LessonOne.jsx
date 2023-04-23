import React from "react";

//In this Lesson we'll discuss about JSX;
//JSX: JavaScript XML and also it is a javascript xml syntactical mechanism that will help us to write plain HTML in JS file. But this is not actual HTML under the Hood it is converted in JS Object;

//Let's create an element with the help of react:
// const element = React.createElement(
//   "div",
//   { className: "lesson-one" },
//   React.createElement("h3", { className: "title" }, "Hello React.JS")
// );

/*
::Behind the scene React created the elements like this by the help of JS:
 {
  element : {
    type: "div",
    props: {
      className: "lesson-one",
      children: [
        {
          type: "h3",
          props: {
            className: "title",
            children: "Hello React.JS",
          },
        },
      ],
    }
  }
 }
*/

//But we can easily write the multiple element by the help of JSX:
// const multiElement = (
//   <div className="lesson-one">
//     <h1 className="title">Learning React.js JSX</h1>
//   </div>
// );

//or: with component:-
function LessonOne() {
  return (
    <div className="lesson-one">
      <h1 className="title">Learning React.js JSX</h1>
      <div className="users">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div>
    </div>
  );
}

//export the component:
export default LessonOne;
