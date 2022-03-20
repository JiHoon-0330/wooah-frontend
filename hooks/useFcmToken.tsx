import { useQuery } from "react-query";

const useFcmToken = (): {
  fcmToken: string | null | undefined;
  setFcmToken: (currentToken: string) => void;
} => {
  const KEY = "FCM_TOKEN";
  const PREV_KEY = "PREV_FCM_TOKEN";

  const { data: fcmToken, refetch } = useQuery(KEY, () => {
    return localStorage.getItem(KEY);
  });

  const setFcmToken = (currentToken: string) => {
    localStorage.setItem(KEY, currentToken);
    refetch();
    const prev = JSON.parse(localStorage.getItem(PREV_KEY) || "{}");
    if (!prev?.[currentToken]) {
      localStorage.setItem(
        PREV_KEY,
        JSON.stringify({
          ...prev,
          [currentToken]: new Date(),
        }),
      );
    }
  };

  return {
    fcmToken,
    setFcmToken,
  };
};

export default useFcmToken;
