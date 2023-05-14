import { useCallback, useMemo, useState } from "react";
import Button from "./FunctionalComponentsAndHook/Lesson3/Button";
import ShowCount from "./FunctionalComponentsAndHook/Lesson3/ShowCount";
import Title from "./FunctionalComponentsAndHook/Lesson3/Title";

const AppAlt = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const increaseByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount counter={count1} title="Counter 1" />
      <p>{isEvenOrOdd ? "Even" : "Odd"}</p>
      <Button eventHandler={increaseByOne}>Increase By One</Button>
      <hr />
      <ShowCount counter={count2} title="Counter 2" />
      <Button eventHandler={increaseByFive}>Increase By Five</Button>
    </div>
  );
};

export default AppAlt;
