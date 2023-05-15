import { useState } from "react";
// import EffectClass from "./FunctionalComponentsAndHook/Lesson2/EffectClass";
import Effect from "./FunctionalComponentsAndHook/Lesson2/Effect";

const AppAlt = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      {show && <Effect />}
      <br />
      <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default AppAlt;
