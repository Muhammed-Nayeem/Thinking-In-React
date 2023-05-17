import useWindowWidth from "../Hook/useWindowWidth";

const LayoutComponentTwo = () => {
  const onSmallScreen = useWindowWidth(768);

  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h3>Another Layout Component!</h3>
    </div>
  );
};

export default LayoutComponentTwo;
