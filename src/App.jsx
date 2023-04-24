import "./App.css";
import ClockList from "./ReactLessons/LessonFive/ClockList";

const quantities = [1, 2, 3, 4];

function App() {

  return (
    <div className="app">
      <ClockList quantities={quantities}></ClockList>
    </div>
  );
}

export default App;
