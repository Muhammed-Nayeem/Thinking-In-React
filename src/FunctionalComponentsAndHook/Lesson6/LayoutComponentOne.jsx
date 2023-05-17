import useWindowWidth from "../Hook/useWindowWidth";

const LayoutComponentOne = () => {
  const onSmallScreen = useWindowWidth(600);

  return (
    <div className="layout-1">
      <h3>You are browsing on {onSmallScreen ? "small" : "large"} device.</h3>
    </div>
  );
};

export default LayoutComponentOne;
