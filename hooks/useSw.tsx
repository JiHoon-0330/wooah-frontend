import { useEffect } from "react";

const useSw = () => {
  const installServiceWorker = () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log(
          "Service Worker registration successful with scope: ",
          registration.scope,
        );
        // registration.active?.postMessage("clear old cache");
      },
      (err) => {
        console.log("Service Worker registration failed: ", err);
      },
    );
  };

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", installServiceWorker);
    return () => {
      window.removeEventListener("load", installServiceWorker);
    };
  }, []);
};

export default useSw;
