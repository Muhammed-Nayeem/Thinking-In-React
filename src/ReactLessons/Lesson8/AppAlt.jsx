import Emoji from "./ReactLessons/Lesson8/Composition/Emoji";
import Bracket from "./ReactLessons/Lesson8/Composition/Bracket";
import Text from "./ReactLessons/Lesson8/Composition/Text";

//Composition Technique:

function AppAlt() {
  
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

export default AppAlt;
