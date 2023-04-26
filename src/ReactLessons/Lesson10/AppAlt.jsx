import "./App.css";
import ClickCounter from "./ReactLessons/Lesson10/ClickCounter";
import HoverCounter from "./ReactLessons/Lesson10/HoverCounter";
// import User from "./ReactLessons/Lesson10/RenderProps/User";
import Counter from "./ReactLessons/Lesson10/RenderProps/Counter";

//Render Props Technique: Props Dealing;

function AppAlt() {
  return (
    <div className="app">
      {/* <User render={(isLoggedIn) => isLoggedIn ? "Nayeem" : "Guest"}></User> */}

      {/* <Counter
        render={(counter, incrementCounter) => (
          <ClickCounter
            counter={counter}
            incrementCounter={incrementCounter}
          ></ClickCounter>
        )}
      />

      <Counter
        render={(counter, incrementCounter) => (
          <HoverCounter
            counter={counter}
            incrementCounter={incrementCounter}
          ></HoverCounter>
        )}
      /> */}

      <Counter>
        {(counter, incrementCounter) => (
          <ClickCounter
            counter={counter}
            incrementCounter={incrementCounter}
          ></ClickCounter>
        )}
      </Counter>

      <Counter>
        {(counter, incrementCounter) => (
          <HoverCounter
            counter={counter}
            incrementCounter={incrementCounter}
          ></HoverCounter>
        )}
      </Counter>
    </div>
  );
}

export default AppAlt;
