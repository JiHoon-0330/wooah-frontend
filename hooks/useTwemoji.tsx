import { useCallback, useRef } from "react";
import twemoji from "twemoji";

const isIOS = () => {
  if (typeof window === "undefined") return true;
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

const useTwemoji = (content: string) => {
  const observer = useRef<IntersectionObserver>();
  const ref = useCallback(
    (el) => {
      if (!content) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        const currentEntry = entries[0];
        if (!currentEntry.isIntersecting) return;
        twemoji.parse(currentEntry.target as HTMLElement);
      });
      if (el) observer.current.observe(el);
    },
    [content],
  );
  if (isIOS()) return null;
  return ref;
};

export default useTwemoji;
