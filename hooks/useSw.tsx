import { useEffect } from "react";

const useSw = () => {
  const installServiceWorker = () => {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope,
          );
        },
        (err) => {
          console.log("Service Worker registration failed: ", err);
        },
      );
    });
  };

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    installServiceWorker();
  }, []);
};

export default useSw;
