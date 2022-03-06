import { useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useSetHeight = () => {
  const { windowHeight } = useWindowSize();

  useEffect(() => {
    if (!window) return;

    document.documentElement.style.setProperty("--height", `${windowHeight}px`);
  }, []);
};

export default useSetHeight;
