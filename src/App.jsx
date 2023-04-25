import "./App.css";
import Emoji from "./ReactLessons/LessonEight/Composition/Emoji";
import Bracket from "./ReactLessons/LessonEight/Composition/Bracket";
import Text from "./ReactLessons/LessonEight/Composition/Text";

function App() {
  
  return (
    <div className="app">
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket}></Text>
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
