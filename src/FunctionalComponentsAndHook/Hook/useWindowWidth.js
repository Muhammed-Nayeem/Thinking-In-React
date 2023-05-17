import { useState, useEffect, useCallback } from "react";

// const useWindowWidth = () => {
//   const [onSmallScreen, setOnSmallScreen] = useState(false);

//   const checkScreenSize = () => {
//     setOnSmallScreen(window.innerWidth < 768);
//   };

//   useEffect(() => {
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     //cleanup:
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return onSmallScreen;
// };

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = useCallback(() => {
    setOnSmallScreen(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    //cleanup:
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setOnSmallScreen(window.innerWidth < screenSize);
  //   };

  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);

  //   //cleanup:
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, [screenSize]);

  return onSmallScreen;
};

export default useWindowWidth;
