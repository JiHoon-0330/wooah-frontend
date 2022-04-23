import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const getSize = () => {
    const { innerWidth, innerHeight } = window;
    setWindowWidth(innerWidth);
    setWindowHeight(innerHeight);
  };

  const func = useDebounce(getSize, 500);

  useEffect(() => {
    if (!window) return;
    getSize();
    window.addEventListener("resize", func);
    return () => {
      window.removeEventListener("resize", func);
    };
  }, []);
  return { windowWidth, windowHeight };
};

export default useWindowSize;
