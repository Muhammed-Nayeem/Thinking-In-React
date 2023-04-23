import "./App.css";
import Clock from "./ReactLessons/LessonTwo/Clock";

function App() {
  
  return (
    <div className="app">
      <Clock locale="bn-BD"></Clock>
      <Clock locale="en-US"></Clock>
    </div>
  );
}

export default App;
