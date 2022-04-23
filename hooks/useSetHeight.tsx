import { useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useSetHeight = () => {
  const { windowHeight } = useWindowSize();

  useEffect(() => {
    if (!window || !windowHeight) return;
    document.documentElement.style.setProperty("--height", `${windowHeight}px`);
  }, [windowHeight]);
};

export default useSetHeight;
